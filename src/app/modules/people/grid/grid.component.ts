import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import Person from "../../../shared/interfaces/person";
import { PeopleService } from "../../../core/services/people.service";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.css"]
})
export class GridComponent implements OnInit {
  public people: Array<Person>;
  @Output() public count = new EventEmitter<number>();
  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(
      payload => {
        this.people = payload.results;
        this.count.emit(payload.count);
      },
      error => console.log(error),
      () => console.log("Finished fetch of data")
    );
  }
}
