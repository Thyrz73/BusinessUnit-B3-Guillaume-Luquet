import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Produit } from 'src/app/Model/produit';
import { InterfaceService } from '../services/interface.service';




@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})


export class DetailPageComponent implements OnInit {
  public produitList: Produit[];
  public selected= this._productServ.selected;
  public formModif = this._productServ.formModif;
  public formCreate= this._productServ.formCreate;
  
  constructor(public _productServ:ProduitService, private formBuild: FormBuilder, public interfServ:InterfaceService ) {}

  

  ngOnInit(): void {
    console.log(this.formModif.value)
    console.log(this.selected)
  }

}
