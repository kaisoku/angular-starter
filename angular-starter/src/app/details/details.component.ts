import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [
    `
      .white-text {
        color: white;
      }
    `,
  ],
})
export class DetailsComponent {
  displayDetails = false;
  logs = [];
  //index = 0;

  setDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    //this.index++;
    //this.logs.push(this.index);
    this.logs.push(new Date());
  }
}
