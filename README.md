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
- map:
    - Transform value: 
    - convert data into another form.
    - transform api response
    - `of(1,2,3).pipe(map(res=>res*2)).subscribe(console.log)`
- filter:
    - `of(1,2,3,4,5,6,7,8,9,10).pipe((filter(res=>res%2===0))).subscribe(console.log)`
- tap:
    - `of(1,2,3,4,5,6).pipe(tap(res=>console.log(res))).subscribe()`
- debounceTime: 
    - Wait before emitting
    - Use case: typing search(avoids multiple api calls) 
    - `fromEvent('input','keyup').pipe(debounceTime(300)).subscribe()`
- distinctUntilChanged:
    - Ignore duplicates
    - `of(1,1,2,2,3,4).pipe(distinctUntilChanged()).subscribe()`
- take: take first N value
    - `interval(1000).pipe(take(3))subscribe(console.log)`
    - output: 0,1,2
- takeUntil:
    - `
        const stop$ = fromEvent(button,'click');
        interval(1000).pipe(takeUntil(stop$)).subcribe()
    `
    - use case: stop timer after button click
- catchError:
    - `of(1,2,3).pipe(map(x=>10/x),catchError(err=>of('Error occured'))).subcribe(console.log)`;
    - API error handling


- combineLatest:
    - Combine latest value, but all request must be emitted atleast once.
    - `combineLatest([of('A'),of('B')]).subscribe(console.log)`
- forkJoin:
    - wait for all until all to complete
    - `forkjoin([fetch('/api/user'),fetch('/api/orders')]).subscribe(console.log)`
    -  Runs once when all to complete
    -  Use case: Dashboard data to show
- switchMap: Only latest request is run, previous request is cancelled(use for autocomplete)
    - `fromEvent('input','keyup').pipe(debounce(300),switchMap(e=>fetch('/api?q=${e.target.value}'))).subscribe()`
- mergeMap: Runs multiple in parallel, all api calls together
    - `from([1,2,3,4,5,6]).pipe(mergeMap(id=>fetch('/api/user/${id}'))).subscribe()`
- concatMap: Run one by one(queue)
    - `from([1,2,3,4,5,6]).pipe(concatMap(id=>fetch('/api/user/${id}'))).subscribe()`
- exhaustMap: Ignores new until current finishes, prevents double-clicks api calls, 
    - use case: form submit button
    - `fromEvent('input','click').pipe(exhaustMap(()=>savedata()))`


- shareReplay: Share + cache result
    - `const data$ = fetch('/api').then(res=>res.json()); `
    - `const shared$ = from($data).pipe(shareReplay(1));`
    - `shared$.subscribe();`
    - `shared$.subscribe();`
    - API called once
    - Value reused
    
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