import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'remote-animate-app',
  templateUrl: './remote-animate.component.html',
  styleUrls: ['./remote-animate.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: '#c6ecff'
      })),
      transition('open => closed', [
        animate('0.1s')
      ]),
      transition('closed => open', [
        animate('0.1s')
      ]),
    ]),
  ],
})
export class RemoteAnimateComponent {
  title = 'remote-animate';
  isOpen = true;
  control = new FormControl('');

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
