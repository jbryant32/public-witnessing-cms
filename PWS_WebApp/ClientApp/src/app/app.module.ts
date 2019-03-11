import { CoreRoutingModule } from "./core/core-routing.module";
import { CoreComponent } from "./core/core.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
