import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

const routes: Routes = [
  {
    path: '', 
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), StoreModule.forFeature('carts', {}), EffectsModule.forFeature([])],
  exports: [RouterModule]
})
export class CartRoutingModule { }
