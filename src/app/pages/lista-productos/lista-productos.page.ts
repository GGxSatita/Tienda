import { Component, OnInit, ViewChild} from '@angular/core';
import { ProductoConId } from 'src/app/interfaces/producto';
import { ProductoServiceService } from 'src/app/services/producto-service.service';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.page.html',
  styleUrls: ['./lista-productos.page.scss'],
})
export class ListaProductosPage implements OnInit {
  public listaProductos : Array<ProductoConId> = [];

  @ViewChild(IonInfiniteScroll)
  public infinito : IonInfiniteScroll;

  constructor(
    private apiProductos : ProductoServiceService
  ) { }

  ngOnInit() {
    this.apiProductos.listarProductos$.subscribe(datos =>{
      this.listaProductos = datos;
      if(this.infinito){
        this.infinito.complete();
      }
    })
    this.apiProductos.listaPrimerosProds();
  }

  ionViewWillEnter(): void{
    console.log('Entrando a la pagina')
    this.apiProductos.listaPrimerosProds();
  }

  ionViewDidEnter(): void{
    console.log('Entró a la pagina')
  }

  public cargarMasProds(){
    this.apiProductos.mostrarMasProds();
  }

}
