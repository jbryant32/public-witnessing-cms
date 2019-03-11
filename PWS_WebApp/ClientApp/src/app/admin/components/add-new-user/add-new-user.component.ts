import { Validators, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
@Component({
  selector: "app-add-new-user",
  templateUrl: "./add-new-user.component.html",
  styleUrls: ["./add-new-user.component.css"]
})
export class AddNewUserComponent implements OnInit {
  email;
  userInfo;
  firstName;
  lastName;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {

  }
}
