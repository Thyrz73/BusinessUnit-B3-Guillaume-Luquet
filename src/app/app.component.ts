import { ViewEncapsulation } from '@angular/core';
import { AfterViewInit, Component } from '@angular/core';
import { DetailProduitComponent } from './graphics/detail-produit/detail-produit.component';
import { InterfaceService } from './services/interface.service';
import { ProduitService } from './services/produit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'BusinessUnit';

  
  public constructor(public interfServ: InterfaceService, public produitService: ProduitService){}
  
}
