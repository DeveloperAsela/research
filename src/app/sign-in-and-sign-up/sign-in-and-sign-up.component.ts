import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignInAndSignUpService, User } from './sign-in-and-sign-up.service';

@Component({
  selector: 'app-sign-in-and-sign-up',
  templateUrl: './sign-in-and-sign-up.component.html',
  styleUrls: ['./sign-in-and-sign-up.component.scss']
})
export class SignInAndSignUpComponent implements OnInit {

  @Input() isLogin: boolean;
  signInForm: FormGroup;
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder,
    private loginService: SignInAndSignUpService) { }

  ngOnInit(): void {
    this.isLogin = false;
    this.signInForm = this.fb.group({
      nicNumber: '',
      password: ''
    });
    this.signUpForm = this.fb.group({
      nicNumber: '',
      password: '',
      district: '',
      city: ''
    });

  }

  signUp(){
    const user: User = {
      userName: this.signUpForm.value.signUpUsername,
      email: this.signUpForm.value.signUpEmail,
      password: this.signUpForm.value.signUpConfirmPassword
    };
    this.loginService.signUp(user).subscribe(data=>{
      console.log(data)
    })
  }
  signIn(){
    console.log(this.signIn)
  }
  gotoSignUp(){
    this.isLogin = false
  }
  gotoLogin(){
    this.isLogin = true
  }
}
