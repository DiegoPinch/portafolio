import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumePageComponent } from './resume-page/resume-page.component';


@NgModule({
  declarations: [
    ResumePageComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ],
  exports: [
    ResumePageComponent
  ]
})
export class ResumeModule { }
