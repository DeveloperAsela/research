import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  responsiveOptions
  products = [1, 21, 3, 1, 21, 3, 1, 21, 3];
  developers = [];
  constructor(
    private router: Router,
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.developers = [
      { name: 'New York', count: 1500 },
      { name: 'Rome', count: 500 },
      { name: 'London', count: 196 },
      { name: 'Istanbul', count: 485 },
      { name: 'Paris', count: 52 }
    ]
  }
  routeToSignUpPage(){
    this.router.navigate(['/sign-up']);
  }
  routeToLoginPage(){
    this.router.navigate(['/login']);
  }

}
