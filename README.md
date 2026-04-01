## Module Federation  
- ng new microfrontend-workspace --create-application=false
- cd microfrontend-workspace
### Generate Apps 
- Shell Apps
- Remote Apps: Products, Carts
### Install the plugins
- Host
    - ng add @angular-architects/module-federation --project shell --type host
- Remote
    - ng add @angular-architects/module-federation --project products --type remote
    - ng add @angular-architects/module-federation --project cart --type remote

### Configure Remote Apps
- products-> webpack.config.js
    `module.exports = {
        name: 'products',
        exposes: {
            './Module': './projects/products/src/app/products/products.module.ts',
        },
    };`
- In shell-> webpack.config.js
    `remotes: {
        products: 'http://localhost:4201/remoteEntry.js',
        cart: 'http://localhost:4202/remoteEntry.js',
    }`

-  Setup Routing in shell
`const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',
      }).then(m => m.ProductsModule),
  },
];`
-  Each apps run into different ports
    - ng serve shell --port 4200
    - ng serve products --port 4201
    - ng serve cart --port 4202
### RXJS Operator
##### Creation Operator
- Creation Operator: of, from, interval, timer
    - `interval(1000).subscribe(val=>console.log(val))`
    - `of(1,2,3,4).subscribe(val=>console.log(val))`
    - `from([1,2,3]).subscribe(val=>console.log(val))`
    - `time(100).subscribe(val=>console.log(val))`
    -  `fromEvent(document,'click').subscribe(res=>res)`
- Transformation Operator: map, switchMap, mergeMap, concatMap, exhaustMap, take, skip, debounceTime, distictUntilChanged, first, last, takeUntil
    - `fromEvent(document,'click').pipe((map(e=>e.clientX)).subscribe(console.log)`
    - `from([1,2,3,4,5,6,7,8,9]).pipe(filter(res=>res%2 ===0)).subscribe(console.log)`
    - 