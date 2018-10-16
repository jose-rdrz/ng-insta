import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GridComponent, PersonComponent],
  exports: [GridComponent]
})
export class PeopleModule { }
