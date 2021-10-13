import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // HomeComponent,
    // AboutComponent
  ]
})
export class SharedModule { }
