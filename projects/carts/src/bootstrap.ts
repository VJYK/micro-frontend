import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CartModule } from './app/cart.module';


platformBrowserDynamic().bootstrapModule(CartModule)
  .catch(err => console.error(err));
