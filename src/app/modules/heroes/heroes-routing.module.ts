import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './pages/hero-search/hero-search.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: HeroesListComponent
      },
      {
        path: 'detail/:idHero',
        component: HeroDetailComponent
      },
      {
        path: 'search/:keyword',
        component: HeroSearchComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
