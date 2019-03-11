import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
 /// <reference types="@types/googlemaps" />

@Component({
  selector: "app-add-location",
  templateUrl: "./add-location.component.html",
  styleUrls: ["./add-location.component.css"]
})
export class AddLocationComponent implements OnInit {
  @ViewChild("gmap")
  gmapElement: any;
  @ViewChild("locationSelect")
  locationSelect: any;
  saveMarkerDisabled = true;
  hideLoadIndicator = true;
  infoContent: HTMLElement;
  hideSaveLocation = true;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.initAutocomplete();
    this.infoContent = document.getElementById("info-content");
  }
  initAutocomplete() {

    let mapProps = {
      center: { lat: 33.7741539, lng: -116.3426436 },
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    const map = new google.maps.Map(this.gmapElement.nativeElement, mapProps);

    console.log(map);
    // Create the search box and link it to the UI element.
    let input = document.getElementById("pac-input");
    console.log(input);
    let searchBox = new google.maps.places.SearchBox(input as HTMLInputElement);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", function() {
      searchBox.setBounds(map.getBounds());
    });

    let markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", function() {
      let places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      let bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        let icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.

        markers.push(
          new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,

            position: place.geometry.location
          })
        );

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });

      map.fitBounds(bounds);
    });
    markers = [];
    map.addListener("click", event => {
      //remove all markers from map
      markers.forEach(mark => {
        mark.setMap(null);
      });
      const marker = new google.maps.Marker({
        map: map,
        title: "Table Location",
        position: event["latLng"]
      });
      markers.push(marker);
      console.log(marker);
      const infoWindow = new google.maps.InfoWindow({
        content: this.infoContent
      });
      infoWindow.open(map, marker);
      console.log(event);
      this.hideSaveLocation = false;
    });
  }
  setMarker(maps: google.maps.Map, marker: google.maps.Marker) {
    const infoWindow = new google.maps.InfoWindow({
      content: "<button mat-button>Press me</button>"
    });

    infoWindow.open(maps, marker);
  }
  selectionChanged(e) {
    if (this.locationSelect.value) {
      this.saveMarkerDisabled = false;
    }
    console.log(this.locationSelect);
  }
  saveLocation() {
    console.log("this is a saved Location");
    this.hideLoadIndicator = false;
    setTimeout(() => {
      let snackbarConfig = new MatSnackBarConfig();
      snackbarConfig.duration = 2000;

      this.hideLoadIndicator = true;
      this.snackBar.open("Saved Marker",null,snackbarConfig);
    }, 2000);
  }
}
