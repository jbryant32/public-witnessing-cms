import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
// export interface DialogData {
//   message: string;
//   name: string;
// }

@Component({
  selector: "app-confirm-dialog",
  templateUrl: "./confirm-dialog.component.html",
  styleUrls: ["./confirm-dialog.component.css"]
})
export class ConfirmDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
// tslint:disable-next-line: no-trailing-whitespace
    @Inject(MAT_DIALOG_DATA)
    public data
  ) {
    console.log(data);
  }

  ngOnInit() {}
  onNoClick() {
    console.log("no");
    this.dialogRef.close();
  }
  onYesClick() {
    console.log("yes");
  }
}
