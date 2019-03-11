import { UsersDashboardComponent } from '././components/users-dashboard/users-dashboard.component';
import { DeleteUserComponent } from "././components/delete-user/delete-user.component";
import { AdminModule } from "./admin.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AdminComponent } from "./admin.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddNewUserComponent } from "./components/add-new-user/add-new-user.component";
import { LocationsDashboardComponent } from './components/locations-dashboard/locations-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "locations", component: LocationsDashboardComponent },
      { path: "users", component: UsersDashboardComponent }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
