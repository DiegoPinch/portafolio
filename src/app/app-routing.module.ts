import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: '',  
        redirectTo: 'home',  
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./casa/casa.module').then((m) => m.CasaModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then((m) => m.AboutModule)
      },
      {
        path: 'resume',
        loadChildren: () => import('./resume/resume.module').then((m) => m.ResumeModule)
      },
      {
        path: 'portfolio',
        loadChildren: () => import('./portafolio/portafolio.module').then((m) => m.PortafolioModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
