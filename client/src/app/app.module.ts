import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { FooterComponent } from './views/layout/footer/footer.component';
import { HeaderComponent } from './views/layout/header/header.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { CarouselComponent } from './elements/carousel/carousel.component';
import { IndexinfoComponent } from './elements/indexinfo/indexinfo.component';
import { LinetextComponent } from './elements/linetext/linetext.component';
import { SourceFastenerComponent } from './views/fastener/source-fastener/source-fastener.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'fastener/source', component: SourceFastenerComponent },
  { path: '**', component: IndexComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    CarouselComponent,
    IndexinfoComponent,
    LinetextComponent,
    SourceFastenerComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
