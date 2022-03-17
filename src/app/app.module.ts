import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarModule } from '@shared/navbar/navbar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HttpClientModule
  ],
  providers: [
    // { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    // JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
