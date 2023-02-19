import { OffreEmploisComponent } from './offre-emplois/offre-emplois.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdcutsComponent } from './prodcuts/prodcuts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsProductComponent } from './details-product/details-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdcutsComponent,
    OffreEmploisComponent,
    NavbarComponent,
    NotFoundComponent,
    DetailsProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
