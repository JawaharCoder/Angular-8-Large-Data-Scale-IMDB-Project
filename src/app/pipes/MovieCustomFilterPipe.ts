import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 

@Pipe({
  name: 'MovieCustomFilter',
  pure: false
})

export class MovieCustomFilterPipe implements PipeTransform {
    transform(value: any, filter: Object): any{
        
        if(filter["primaryTitle"] != ""){
            return value.filter(item => item.primaryTitle.indexOf(filter["primaryTitle"]) !== -1)
        }

        // if(filter["Status"] != ""){
        //     return value.filter(item => item.Title.indexOf(filter["Status"]) !== -1)
        // }
        return value;
    }
}