import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc2-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  appDetail = {
    path: '/remote/remoteEntry.js',
    name: 'remote',
    component: 'RemoteAnimateComponent',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
