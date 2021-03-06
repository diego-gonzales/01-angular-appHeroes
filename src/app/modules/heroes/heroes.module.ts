import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroSearchComponent } from './pages/hero-search/hero-search.component';
import { HomeImagePipe } from './pipes/home-image.pipe';


@NgModule({
  declarations: [
    HeroesListComponent,
    HeroDetailComponent,
    HeroCardComponent,
    HeroSearchComponent,
    HomeImagePipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
