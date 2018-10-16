import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public count: number;
  title = 'ng-insta';

  countListener = (val:number) => this.count = val;
}
