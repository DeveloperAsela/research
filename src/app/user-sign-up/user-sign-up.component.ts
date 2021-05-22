import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss']
})
export class UserSignUpComponent implements OnInit {

  constructor(private router: Router) { }
  isLogin = false;
  ngOnInit(): void {
  }
  routeToLoginPage(){
    this.router.navigate(['/login']);
  }

}
