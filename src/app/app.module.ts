import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { LazyloadedComponent } from './lazyloaded/lazyloaded.component';

@NgModule({
  declarations: [
    AppComponent,
    OffcanvasComponent,
    LazyloadedComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
