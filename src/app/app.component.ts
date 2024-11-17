import { Component, ViewChild } from '@angular/core';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('offcanvas') offcanvas: OffcanvasComponent;

  openOffcanvas() {
    this.offcanvas.open();
  }
}
