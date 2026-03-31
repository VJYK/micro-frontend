import { Component, OnInit } from '@angular/core';
import { filter, from, fromEvent, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  ngOnInit() {
    of('Hello from products').subscribe(res=> console.log(res));
    from([1,2,3]).pipe(filter(x => x > 1)).subscribe(res=> console.log(res));
    //fromEvent(document, 'mousemove').subscribe(res=> console.log(res));
    
  }

}
