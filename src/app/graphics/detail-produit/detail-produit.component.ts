import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Produit } from 'src/app/Model/produit';
import { InterfaceService } from 'src/app/services/interface.service';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']

  
})
export class DetailProduitComponent implements OnInit {
  public produitList: Produit[];
  public formModif = this._productServ.formModif;
  public toggle = false;
  
  constructor(public _productServ:ProduitService, private formBuild: FormBuilder, public interfServ: InterfaceService) { }


  selectedProd(event, product: Produit){
    
    this._productServ.selected = product;
    this._productServ.formModif.setValue(this._productServ.selected);
    console.log(this._productServ.formModif.value);
  
  }

  ngOnInit(): void {
    this.produitList =  this._productServ.getAllProd();
  }

  

 

}


