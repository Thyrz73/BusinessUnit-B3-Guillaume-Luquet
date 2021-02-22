import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailProduitComponent } from './graphics/detail-produit/detail-produit.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router'

const routes: Routes = [
  {path: 'detail-produit', component: DetailProduitComponent},
  {path: 'detail-produit/detail-page', component:DetailPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DetailProduitComponent,
    DetailPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
