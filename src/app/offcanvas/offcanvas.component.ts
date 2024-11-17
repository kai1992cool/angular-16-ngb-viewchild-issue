import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { LazyloadedComponent } from '../lazyloaded/lazyloaded.component';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent {

  @ViewChild('offcanvas') offcanvas: TemplateRef<OffcanvasComponent>;
  @ViewChild('lazy') lazy: LazyloadedComponent;
  private offcanvasService = inject(NgbOffcanvas);
  
  open() {
    this.offcanvasService.open(this.offcanvas);
  }

  test() {
    this.lazy.test();
  }
}
