import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './starter.component';
import { MovieCustomFilterPipe } from '../pipes/MovieCustomFilterPipe';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Starter Page',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Starter Page' }
      ]
    },
    component: StarterComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, NgxUiLoaderModule, RouterModule.forChild(routes)],
  declarations: [StarterComponent, MovieCustomFilterPipe],
  exports:      [ MovieCustomFilterPipe ]
})
export class StarterModule {}
