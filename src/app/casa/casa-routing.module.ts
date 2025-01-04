import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasaPageComponent } from './casa-page/casa-page.component';

const routes: Routes = [
  {path: '', component: CasaPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasaRoutingModule { }
