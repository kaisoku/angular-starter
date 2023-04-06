import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]', attribute selector
  //selector: '.app-servers', class selector
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //template: ` <app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
