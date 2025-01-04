import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasaRoutingModule } from './casa-routing.module';
import { CasaPageComponent } from './casa-page/casa-page.component';


@NgModule({
  declarations: [
    CasaPageComponent
  ],
  imports: [
    CommonModule,
    CasaRoutingModule
  ],
  exports: [
    CasaPageComponent
  ]
})
export class CasaModule { }
