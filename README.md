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