import { HomeComponent } from "././components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { CoreModule } from './core.module';
import { AdminRoutingModule } from '../admin/admin-routing.module';

const routes: Routes = [
  { path: "admin", loadChildren: "../admin/admin.module#AdminModule" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent }
];
@NgModule({
  declarations: [],
  imports: [CommonModule,CoreModule,RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class CoreRoutingModule {}
