import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaProductoPageRoutingModule } from './modifica-producto-routing.module';

import { ModificaProductoPage } from './modifica-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificaProductoPageRoutingModule
  ],
  declarations: [ModificaProductoPage]
})
export class ModificaProductoPageModule {}
