import { Component, EventEmitter, Input, Output } from '@angular/core';
import logo from '../../assets/nx-logo-white.svg';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'remote-app',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.scss'],
})
export class RemoteComponent {
  @Input() name: string;
  @Output() emitclick = new EventEmitter();
  title = 'Provider';
  logo = logo;
}
