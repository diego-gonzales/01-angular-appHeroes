import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/pages/home/home.component';
import { AboutComponent } from './shared/pages/about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'heroes',
    loadChildren: () => import('./modules/heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  // {
  //   path: 'example',
  //   loadChildren: () => import('./modules/example/example.module').then(m => m.ExampleModule)
  // },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
