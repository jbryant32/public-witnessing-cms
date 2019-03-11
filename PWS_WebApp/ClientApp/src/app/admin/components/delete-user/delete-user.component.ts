import { UserDataModel } from "../../models/UserDataModel";
import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { DataSource } from "@angular/cdk/table";
import { MatSort } from "@angular/material/sort";
import { SelectionModel } from "@angular/cdk/collections";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-delete-user",
  templateUrl: "./delete-user.component.html",
  styleUrls: ["./delete-user.component.css"]
})
export class DeleteUserComponent implements OnInit {
  @ViewChild(MatSort)
  matSort: MatSort;
  selection: SelectionModel<UserDataModel>;
  behaviorSubject: BehaviorSubject<Array<UserDataModel>>;
  columnsForDisplay = [
    "Select All",
    "FirstName",
    "LastName",
    "KingdomHall",
    "Available"
  ];

  private localSource: Array<UserDataModel> = [
    new UserDataModel("Jason", "Bryant", "Rancho Mirage", true),
    new UserDataModel("Daniel", "Martinez", "Rancho Mirage", false),
    new UserDataModel("Sally", "Martinez", "Rancho Mirage", false)
  ];
  // private userData = [
  //   {
  //     FirstName: "Jason",
  //     LastName: "Bryant",
  //     KingdomHall: "Rancho Mirage",
  //     Available: true
  //   },
  //   {
  //     FirstName: "Daniel",
  //     LastName: "Martinez",
  //     KingdomHall: "Rancho Mirage",
  //     Available: true
  //   }
  // ];
  tableDataSource: MatTableDataSource<UserDataModel> = new MatTableDataSource(
    this.localSource
  );

  constructor(private changeDetectorRefs: ChangeDetectorRef) {
    // this.localSource = new Array<UserDataModel>();
    // const user = new UserDataModel("Jason", "Bryant", "Rancho Mirage", true);
    // const user2 = new UserDataModel(
    //   "Daniel",
    //   "Martinez",
    //   "Rancho Mirage",
    //   false
    // );
    // const user3 = new UserDataModel(
    //   "Sally",
    //   "Martinez",
    //   "Rancho Mirage",
    //   false
    // );
    // this.localSource.push(user);
    // this.localSource.push(user2);
    // this.localSource.push(user2);
    // this.localSource.push(user2);
    // this.localSource.push(user2);
    // this.localSource.push(user2);
    // this.localSource.push(user2);
    // this.localSource.push(user2);
    // this.localSource.push(user2);
    // this.localSource.push(user3);
    // this.localSource.push(user3);
    // this.localSource.push(user3);
    // this.localSource.push(user3);
    // this.localSource.push(user3);
    // this.localSource.push(user3);
    // this.localSource.push(user3);
    // this.localSource.push(user3);
    // this.localSource.push(user3);
    // this.localSource.push(user3);
    // this.localSource.push(user3);
    // this.localSource.push(user3);
    // this.localSource.push(user3);
    // this.localSource.push(user3);
    // this.localSource.push(user3);
    // this.tableDataSource.data = this.localSource;
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<UserDataModel>(
      allowMultiSelect,
      initialSelection
    );
    this.behaviorSubject = this.tableDataSource.connect();
  }

  ngOnInit() {}
  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    this.tableDataSource.sort = this.matSort;
  }
  sortData(event) {
    console.log(event);
  }
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.tableDataSource.data.forEach(row => this.selection.select(row));
    console.log(this.selection.selected);
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableDataSource.data.length;
    return numSelected == numRows;
  }
  saveSelect(){
    console.log()
  }
  deleteSelected() {
    console.log(this.selection.selected);
    const find = this.selection.selected;
    find.forEach(item => {
      const index = this.localSource.findIndex(i => item === i);
      this.localSource.splice(index, 1);
    });
    this.resetSelector();
    this.refreshTable();
  }
  resetSelector() {
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<UserDataModel>(
      allowMultiSelect,
      initialSelection
    );
  }
  refreshTable() {
    this.behaviorSubject.next(this.localSource);
    this.tableDataSource.sort = this.matSort;
  }
}
