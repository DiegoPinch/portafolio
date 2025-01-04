import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioPageComponent } from './portafolio-page/portafolio-page.component';


@NgModule({
  declarations: [
    PortafolioPageComponent
  ],
  imports: [
    CommonModule,
    PortafolioRoutingModule
  ],
  exports: [
    PortafolioPageComponent
  ]
})
export class PortafolioModule { }
