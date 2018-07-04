import { Component, Input, Output, EventEmitter } from '@angular/core';

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


   private radioButtonValue: string = 'Jane Doe';


  @Output()
  radioBtnListValueChanged: EventEmitter<string> = new EventEmitter<string>();


  onRadiobuttonListValueChanged() : void
  {
    // alert(this.radioButtonValue);
      this.radioBtnListValueChanged.emit(this.radioButtonValue);
  }

}
