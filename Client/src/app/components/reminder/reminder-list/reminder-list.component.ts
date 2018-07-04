import { Component } from '@angular/core';
import {  ReminderService } from '../../../services/ReminderService';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent {

  selectedPersonName = 'Jane Doe';
  events: any[];
  constructor(public _reminderServie: ReminderService) {
    this.events = this._reminderServie.getReminders();
  }

  onclick(): void {
    this.events = this._reminderServie.getRemindersRefresh();
  }

  trackByPipelienId(index: number, event: any): number {
    return event.id;
  }


  getPerson1Count(): number {
    return this.events.filter(x => x.PersonName === 'Jane Doe').length;
  }

  getPerson2Count(): number {
    return this.events.filter(x => x.PersonName === 'Brandy M').length;
  }

  getPerson3Count(): number {
    return this.events.filter(x => x.PersonName === 'Kate Sim').length;
  }


  onRadioValueChanged(radioBtnValue: string) {
    this.selectedPersonName = radioBtnValue;
  }
}

