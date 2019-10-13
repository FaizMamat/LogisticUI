import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'order-form', loadChildren: './order-form/order-form.module#OrderFormPageModule' },
  { path: 'cargo-description', loadChildren: './cargo-description/cargo-description.module#CargoDescriptionPageModule' },
  { path: 'shipping-detail', loadChildren: './shipping-detail/shipping-detail.module#ShippingDetailPageModule' },
  { path: 'shippingtime', loadChildren: './shippingtime/shippingtime.module#ShippingtimePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
