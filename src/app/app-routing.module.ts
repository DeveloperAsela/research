import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignInAndSignUpComponent } from './sign-in-and-sign-up/sign-in-and-sign-up.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: 'sign-up', component: UserSignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login-new', component: SignInAndSignUpComponent },
  { path: '', component: SignInAndSignUpComponent, pathMatch:'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
