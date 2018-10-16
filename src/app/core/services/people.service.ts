import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {People} from "../../shared/interfaces/person";

@Injectable({
  providedIn: "root"
})
export class PeopleService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getPeople = () => this.http.get<People>("https://swapi.co/api/people")
}
