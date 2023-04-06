import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  username = '';
  allowClick = false;

  constructor() {}

  setAllowClick() {
    return this.username === '';
  }

  onReset() {
    this.username = '';
  }
}
