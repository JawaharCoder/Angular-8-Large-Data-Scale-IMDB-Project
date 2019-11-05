import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetailsComponent } from './moviedetails.component';
import { MovieCustomFilterPipe } from '../pipes/MovieCustomFilterPipe';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Movie Details',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Movie Details' }
      ]
    },
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, NgxUiLoaderModule, RouterModule.forChild(routes)],
  declarations: [MovieDetailsComponent],
  exports:      [ ]
})
export class MovieDetailsModule {}
