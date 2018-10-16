import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-header',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() public peopleCount: number;
  constructor() { }

  ngOnInit() {
  }

}
