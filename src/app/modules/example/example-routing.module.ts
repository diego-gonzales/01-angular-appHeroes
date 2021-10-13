import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleLazyComponent } from './example-lazy/example-lazy.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'example-lazy',
        component: ExampleLazyComponent
      },
      {
        path: '**',
        redirectTo: 'example-lazy'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
