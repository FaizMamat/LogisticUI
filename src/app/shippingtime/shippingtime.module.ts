import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShippingtimePage } from './shippingtime.page';
import { SharedComponentModule } from '../shared-component/shared-component.module';
const routes: Routes = [
  {
    path: '',
    component: ShippingtimePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedComponentModule
  ],
  declarations: [ShippingtimePage]
})
export class ShippingtimePageModule {}
