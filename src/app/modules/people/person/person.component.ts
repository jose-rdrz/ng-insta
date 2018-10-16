import { Component, OnInit, Input } from '@angular/core';
import Person from "../../../shared/interfaces/person"

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() public person : Person;

  constructor() { }

  ngOnInit() {
  }

}
