import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {HttpClientModule} from "@angular/common/http"

import { AppComponent } from "./app.component";
import { HeaderModule } from "./modules/header/header.module";
import { PeopleModule } from "./modules/people/people.module";
import { PeopleService } from "./core/services/people.service";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, HttpClientModule, PeopleModule],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
