import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-productos',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'lista-productos',
    loadChildren: () => import('./pages/lista-productos/lista-productos.module').then( m => m.ListaProductosPageModule)
  },
  {
    path: 'agrega-producto',
    loadChildren: () => import('./pages/agrega-producto/agrega-producto.module').then( m => m.AgregaProductoPageModule)
  },
  {
    path: 'elimina-producto',
    loadChildren: () => import('./pages/elimina-producto/elimina-producto.module').then( m => m.EliminaProductoPageModule)
  },
  {
    path: 'modifica-producto',
    loadChildren: () => import('./pages/modifica-producto/modifica-producto.module').then( m => m.ModificaProductoPageModule)
  },
  {
    path: 'detalle-producto',
    loadChildren: () => import('./pages/detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
