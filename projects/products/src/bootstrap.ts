import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ProductModule } from './app/product.module';


platformBrowserDynamic().bootstrapModule(ProductModule)
  .catch(err => console.error(err));
