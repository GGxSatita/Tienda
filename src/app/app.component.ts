import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title : 'Listar', url: 'lista-productos', icon : 'clipboard'},
    { title : 'Agregar', url: 'agrega-producto', icon : 'add-circle'},
    { title : 'Eliminar', url: 'elimina-producto', icon : 'trash'},
    { title : 'Modificar', url: 'modifica-producto', icon : 'construct'},
    { title : 'Detalle', url: 'detalle-producto', icon : 'receipt'},

  ];
  public labels = [];
  constructor() {}
}
