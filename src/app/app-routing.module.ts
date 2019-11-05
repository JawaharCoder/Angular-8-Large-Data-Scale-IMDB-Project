import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/movies', pathMatch: 'full' },
      {
        path: 'movies',
        loadChildren: './starter/starter.module#StarterModule'
      },
      {
        path: 'moviedetails',
        loadChildren: './moviedetails/moviedetails.module#MovieDetailsModule'
      },
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/movies'
  }
];
