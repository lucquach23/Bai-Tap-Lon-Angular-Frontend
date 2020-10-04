import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RegisPageComponent } from './regis-page/regis-page.component';
import { DslmComponent } from './regis-page/dslm/dslm.component';
import { RegisPageGVComponent } from './regis-page-gv/regis-page-gv.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisPageComponent,
    DslmComponent,
    RegisPageGVComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }