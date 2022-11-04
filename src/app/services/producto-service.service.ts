import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto, ProductoConId } from '../interfaces/producto'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()

export class ProductoServiceService {

  private API_PRODUCTOS_URL = 'http://localhost:3000/productos'
  private comportamientoListar = new BehaviorSubject<Array<ProductoConId>>([]);
  public listarProductos$ = this.comportamientoListar.asObservable();
  private paginaActual = 1;

  constructor(
    private cliente : HttpClient
  ) { }

  public agregarProducto(nuevoProducto : Producto): Observable<any>{
    return this.cliente.post(this.API_PRODUCTOS_URL, nuevoProducto,{
      headers :{
        'Content-Type': 'application/json; charset=utf-8'
      }
    })

  }

  public listaPrimerosProds(){
    this.cliente.get<Array<ProductoConId>>(`${this.API_PRODUCTOS_URL}?_page=1&_limit=5`)
    .subscribe(datos => {
      this.paginaActual = this.paginaActual + 1;
      this.comportamientoListar.next(datos);
    })
  }

  public mostrarMasProds(){
    this.cliente.get<Array<ProductoConId>>(`${this.API_PRODUCTOS_URL}?_page=${this.paginaActual}&_limit=5`)
    .subscribe(datos => {
      if(datos){
        this.paginaActual = this.paginaActual + 1;
        this.comportamientoListar.next(this.comportamientoListar.getValue().concat(datos));
      }

    })
  }

}
