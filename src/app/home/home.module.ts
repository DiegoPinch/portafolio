import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import {DividerModule} from 'primeng/divider';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    MenubarModule,
    TabMenuModule,
    DividerModule,
    SidebarModule,
    MenuModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
