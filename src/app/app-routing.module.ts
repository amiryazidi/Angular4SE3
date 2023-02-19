import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductComponent } from './details-product/details-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffreEmploisComponent } from './offre-emplois/offre-emplois.component';
import { ProdcutsComponent } from './prodcuts/prodcuts.component';


const routes: Routes = [
  {path:'', redirectTo:'products', pathMatch:"full" },
  {path:'products', component:ProdcutsComponent},
  {path:'product/:id', component:DetailsProductComponent},
  {path:'offres',component:OffreEmploisComponent},
  {path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
