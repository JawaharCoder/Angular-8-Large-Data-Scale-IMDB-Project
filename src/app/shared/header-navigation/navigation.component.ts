import { Component, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../../service/movieservice';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  @Output()
  toggleSidebar = new EventEmitter<void>();

  public showSearch = false;

  constructor(public movieService : MovieService) {}
}
