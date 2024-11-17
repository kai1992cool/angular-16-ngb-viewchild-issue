import { Component } from '@angular/core';

@Component({
  selector: 'app-lazyloaded',
  templateUrl: './lazyloaded.component.html',
  styleUrls: ['./lazyloaded.component.scss']
})
export class LazyloadedComponent {
  test() {
    console.log('in lazy loaded component')
  }
}
