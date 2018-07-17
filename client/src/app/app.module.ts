import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './views/index/index.component';
import { FooterComponent } from './views/layout/footer/footer.component';
import { HeaderComponent } from './views/layout/header/header.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { CarouselComponent } from './elements/carousel/carousel.component';
import { IndexinfoComponent } from './elements/indexinfo/indexinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    CarouselComponent,
    IndexinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
