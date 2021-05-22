import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {FileUploadModule} from 'primeng/fileupload';
import {ProgressBarModule} from 'primeng/progressbar';
import {TableModule} from 'primeng/table';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [],
  exports: [
    InputTextModule,
    ButtonModule,
    InputTextModule,
    CarouselModule,
    CardModule,
    FileUploadModule,
    ProgressBarModule,
    OverlayPanelModule,
    TableModule,
    ToastModule
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    CarouselModule,
    CardModule,
    FileUploadModule,
    ProgressBarModule,
    OverlayPanelModule,
    TableModule,
    ToastModule
  ]
})
export class PrimeModule { }
