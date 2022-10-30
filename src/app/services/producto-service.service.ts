import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  private API_PRODUCTOS_URL = 'http://localhost:3000/productos'

  constructor(
    private cliente : HttpClient
  ) { }
}
