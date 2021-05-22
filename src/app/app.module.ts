import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from 'src/prime/prime.module';
import { LoginComponent } from './login/login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInAndSignUpComponent } from './sign-in-and-sign-up/sign-in-and-sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserSignUpComponent,
    LandingPageComponent,
    SignInAndSignUpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PrimeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
