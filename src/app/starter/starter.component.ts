import { Component, AfterViewInit } from '@angular/core';
import { MovieService } from '../service/movieservice';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
  subtitle: string;

  topMovieslist : any [];

  constructor(public movieService: MovieService, public ngxService : NgxUiLoaderService) {
    this.subtitle = 'This is some text within a card block.';
    this.ngxService.start();
    movieService.getTopMovies().then(data => {
      this.topMovieslist = data;
      this.ngxService.stop();
    });


  }





  ngAfterViewInit() {}
}
