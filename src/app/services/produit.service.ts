import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../Model/produit';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  public produitList: Produit[] = [
    {
      id: 1,
      nom:"Canson",
      texture: "ruguex",
      grammage: "200g",
      couleur:"Blanc"
    },
    {
      id: 2,
      nom:"Carreaux",
      texture: "lisse",
      grammage: "500g",
      couleur:"Blanc"
    }
  ]

  public selected: Produit;

  public formModif =  this.formBuild.group({
    nom: [''],
    texture: [''],
    grammage: [''],
    couleur: ['']
  })

  public formCreate = this.formBuild.group({
    nom: [''],
    texture: [''],
    grammage: [''],
    couleur: [''] 
  })
  

  constructor(private _http: HttpClient, private formBuild:FormBuilder) { }

  getAllProd(){
    return this.produitList;
  }

  onSubmit(){
    console.log(this.formModif.value);

    let newProduit = new Produit();
    newProduit= this.formModif.value;
    this.produitList.push(newProduit);
  }

  update(product: Produit){
    for (let productList in this.produitList){
      if  (this.selected == this.produitList[productList]){
        this.produitList[productList] = this.formModif.value;
        console.log(this.formModif.value);
        console.log(this.produitList);
      }
    }
  }

  clearForm(){
    this.formModif.reset();
  }

}


