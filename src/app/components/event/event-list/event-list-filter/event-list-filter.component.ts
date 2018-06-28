import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-list-filter',
  templateUrl: './event-list-filter.component.html',
  styleUrls: ['./event-list-filter.component.css']
})
export class EventListFilterComponent   {
  @Input()
  person1Count:number;
  @Input()
  person2Count:number;
  @Input()
  person3Count:number;


  constructor() { }
}
