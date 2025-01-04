import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioPageComponent } from './portafolio-page/portafolio-page.component';

const routes: Routes = [
  {path: '', component: PortafolioPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioRoutingModule { }
