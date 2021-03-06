import { Component, OnInit } from '@angular/core';
import { DynamicLoader } from './dynamic-loader.service';

@Component({
  selector: 'ng12-module-fed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'container';
  appDetail = {
    path: '/remote/remoteEntry.js',
    name: 'remote',
    component: 'RemoteAnimateComponent',
  };
  leftnavDetail = {
    path: '/leftnav/leftNav.js',
    name: 'leftnav',
    component: 'LeftNavComponent',
  };

  constructor(
    private loader: DynamicLoader
  ) {
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    // this.loader.loadModule({ module: 'RemoteAnimateModule', path: '/animate' });
    // setTimeout(() => {
    //   this.loader.loadModule({ module: 'RemoteModule', path: '/search' });
    // }, 10000);
  }
}
