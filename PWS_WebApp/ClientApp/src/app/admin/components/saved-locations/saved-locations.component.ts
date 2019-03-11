import { Component, OnInit } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "../dialogs/confirm-dialog/confirm-dialog.component";

@Component({
  selector: "app-saved-locations",
  templateUrl: "./saved-locations.component.html",
  styleUrls: ["./saved-locations.component.css"]
})
export class SavedLocationsComponent implements OnInit {
  message: string;
  name="Confirm Delete Data";
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  delete() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: "400px",
      width: "600px",
      data: { name: this.name, message: this.message }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      console.log(result);
      this.message = result;
    });
  }
  undo() {}
}
