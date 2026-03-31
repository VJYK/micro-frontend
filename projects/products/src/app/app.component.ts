import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'products';


  ngOnInit() {
    of('Hello from products').subscribe(res=> console.log(res));
  }
}
