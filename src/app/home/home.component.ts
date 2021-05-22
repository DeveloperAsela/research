import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { SignInAndSignUpService } from '../sign-in-and-sign-up/sign-in-and-sign-up.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private signInAndSignUpService: SignInAndSignUpService
  ) { }
  suggestions = []
  ngOnInit() {
    this.suggestions = ['estadasdasdasd', 'sdfsdfsdfsdf']
  }
  result: any;

  uploader(event) {
    if (event.files.length) {
      const file: File = event.files[0];
      let formData = new FormData();
      formData.append('image', file);

      this.signInAndSignUpService.upload(formData).subscribe(
        (data: { status: boolean, message: string }) => {
          if (data.status) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: data.message });
          }
        }
      )
    }
  }
  getImageResultData() {
    this.signInAndSignUpService.getResult().subscribe(
      (data: { status: boolean, message: string, data: any }) => {
        if (data.status) {
          this.result = data.data;
          this.messageService.add({ severity: 'success', summary: 'Success', detail: data.message });
        }
      }
    );
  }
}
