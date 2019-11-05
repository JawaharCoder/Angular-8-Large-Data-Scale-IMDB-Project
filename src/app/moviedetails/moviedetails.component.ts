import { Component, AfterViewInit } from '@angular/core';
import { MovieService } from '../service/movieservice';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  templateUrl: './moviedetails.component.html'
})
export class MovieDetailsComponent implements AfterViewInit {
  subtitle: string;

  movieDetailsObj : any;

  constructor(private router: Router, public movieService: MovieService, private route: ActivatedRoute, public ngxService : NgxUiLoaderService) {
    
    this.subtitle = 'This is some text within a card block.';

    var RAW = this.route.snapshot.queryParams['RAW'] || '';


    if(RAW != ''){

      this.fetchMovieDetails(RAW);

    } else {
      this.router.navigate(['/']);
    }

   


  }

  fetchMovieDetails(raw){

    this.movieDetailsObj = null;
    this.ngxService.start();
    this.movieService.getMoviesJSON(raw).then(data => {
      this.movieDetailsObj = data;
      window.scrollTo(0, 50);
      this.ngxService.stop();
    });

  }

  


  ngAfterViewInit() {}
}
