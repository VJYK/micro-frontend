import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './ProductModule',
      }).then(m => m.ProductModule),

  }, {
    path: 'carts',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './CartModule',
      }).then(m => m.CartModule),

  }, {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes),StoreModule.forRoot({}),EffectsModule.forRoot([])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
