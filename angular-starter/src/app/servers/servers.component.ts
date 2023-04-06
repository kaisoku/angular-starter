import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]', attribute selector
  //selector: '.app-servers', class selector
  selector: 'app-servers',
  //templateUrl: './servers.component.html',
  template: ` <app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {}
