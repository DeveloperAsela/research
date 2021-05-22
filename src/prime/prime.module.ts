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
    TableModule
  ]
})
export class PrimeModule { }
