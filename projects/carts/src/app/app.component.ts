import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteEntry, loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'carts';
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  async ngAfterViewInit(){
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './ProductComponent',
    });
    this.container.createComponent(m.ProductComponent);
  }
}
