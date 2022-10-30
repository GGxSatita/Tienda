import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminaProductoPageRoutingModule } from './elimina-producto-routing.module';

import { EliminaProductoPage } from './elimina-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminaProductoPageRoutingModule
  ],
  declarations: [EliminaProductoPage]
})
export class EliminaProductoPageModule {}
