import { AdminRoutingModule } from "./admin-routing.module";
import { DeleteUserComponent } from "././components/delete-user/delete-user.component";
import { AddNewUserComponent } from "././components/add-new-user/add-new-user.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AngularMaterialsModule } from "../shared/angular-materials.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LocationsDashboardComponent } from "././components/locations-dashboard/locations-dashboard.component";
import { UsersDashboardComponent } from "././components/users-dashboard/users-dashboard.component";
import { AddLocationComponent } from "././components/add-location/add-location.component";
import { SavedLocationsComponent } from "././components/saved-locations/saved-locations.component";
import { DeleteLocationsComponent } from "././components/delete-locations/delete-locations.component";
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AddNewUserComponent,
    DeleteUserComponent,
    LocationsDashboardComponent,
    UsersDashboardComponent,
    AddLocationComponent,
    SavedLocationsComponent,
    DeleteLocationsComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularMaterialsModule,
    AdminRoutingModule
  ],
  entryComponents:[ConfirmDialogComponent]
})
export class AdminModule {}
