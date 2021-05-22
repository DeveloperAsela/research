import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignInAndSignUpService, User } from './sign-in-and-sign-up.service';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in-and-sign-up',
  templateUrl: './sign-in-and-sign-up.component.html',
  styleUrls: ['./sign-in-and-sign-up.component.scss'],
  providers: [MessageService]
})
export class SignInAndSignUpComponent implements OnInit {

  @Input() isLogin: boolean;
  signInForm: FormGroup;
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router,
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

  signUp() {
    const user: User = {
      nicNumber: this.signUpForm.value.nicNumber,
      district: this.signUpForm.value.district,
      password: this.signUpForm.value.password,
      city: this.signUpForm.value.city
    };
    this.loginService.signUp(user).subscribe((data: { status: boolean, message: string }) => {
      if (data && data.status) {
        this.isLogin = true;
        this.showSuccess(data.message);
      }
    })
  }
  signIn() {
    const user: User = {
      nicNumber: this.signInForm.value.nicNumber,
      password: this.signInForm.value.password
    };
    this.loginService.signIn(user).subscribe((data: { status: boolean, message: string }) => {
      if (data && data.status) {
        this.router.navigate(['/home']);
        this.showSuccess(data.message);
      }
    })
  }
  gotoSignUp() {
    this.isLogin = false
  }
  gotoLogin() {
    this.isLogin = true
  }
  showSuccess(message) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }
}
