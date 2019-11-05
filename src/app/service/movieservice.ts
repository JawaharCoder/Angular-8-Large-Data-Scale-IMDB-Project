import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of as observableOf,  Observable } from 'rxjs';
import { Movie } from '../model/Movie';
import { environment } from '../../environments/environment';


@Injectable()
export class MovieService {

    constructor(private http: HttpClient) {}

    private time: Date = new Date;
    private appweburl: any = environment.apiurl;
    private moviescrapweburl: any = environment.moviescrapapiurl;
    public topfiltersearch = "";

    getUrlParamByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        var results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
      }
    
      appWebUrl() {
        if(this.appweburl){
          return this.appweburl;
        } else {
          this.appweburl = this.getUrlParamByName("SPAppWebUrl");
        }
        return this.appweburl;
      }
    
      hostWebUrl() {
          return this.getUrlParamByName("SPHostUrl");
      }

      getTopMovies() {
        return this.http.get<any>('assets/data/movies.json')
                    .toPromise()
                    .then(res => <Movie[]> res);
        // return this.http.get<any>(this.appweburl+ 'getmovieslist')
        //             .toPromise()
        //             .then(res => <Movie[]> res);
                    
                    
      }

      getMoviesJSON(RAW) {

        return this.http.get<any>(this.moviescrapweburl + '?RAW=' + RAW)
                    .toPromise()
                    .then(res => <Movie[]> res);
                    
                    
      }


}
