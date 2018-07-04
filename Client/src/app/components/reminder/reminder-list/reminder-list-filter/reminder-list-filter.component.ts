import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reminder-list-filter',
  templateUrl: './reminder-list-filter.component.html',
  styleUrls: ['./reminder-list-filter.component.css']
})
export class ReminderListFilterComponent   {
  @Input()
  person1Count:number;
  @Input()
  person2Count:number;
  @Input()
  person3Count:number;

  @Input()
  radioBtnListName:string;
 

  
   private radioButtonValue: string = 'Jane Doe';


  @Output()
  radioBtnListValueChanged: EventEmitter<string> = new EventEmitter<string>();


  onRadiobuttonListValueChanged() : void
  {
    // alert(this.radioButtonValue);
      this.radioBtnListValueChanged.emit(this.radioButtonValue);
  }

}
