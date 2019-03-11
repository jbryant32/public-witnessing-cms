import { AdminRoutingModule } from './../admin/admin-routing.module';
import { HomeComponent } from "././components/home/home.component";
import { AngularMaterialsModule } from "./../shared/angular-materials.module";
import { AdminModule } from "./../admin/admin.module";
import { CoreRoutingModule } from "./core-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreComponent } from "./core.component";
import { PageNotFoundComponent } from "././components/page-not-found/page-not-found.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminComponent } from "../admin/admin.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [

    CoreComponent,
    PageNotFoundComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [CommonModule, SharedModule,  RouterModule,AngularMaterialsModule],
  exports: [PageNotFoundComponent, LoginComponent, HomeComponent]
})
export class CoreModule {}
