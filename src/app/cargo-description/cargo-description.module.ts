import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CargoDescriptionPage } from './cargo-description.page';
import { SharedComponentModule } from '../shared-component/shared-component.module';
const routes: Routes = [
  {
    path: '',
    component: CargoDescriptionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedComponentModule
  ],
  declarations: [CargoDescriptionPage]
})
export class CargoDescriptionPageModule {}
