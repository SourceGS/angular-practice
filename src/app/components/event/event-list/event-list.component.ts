import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {

  selectedPersonName = 'Jane Doe';
  events: any[];
  constructor() {
      this.events = [{
          'id': 1 ,'EventType': 'Birthday', 'PersonName': 'Jane Doe', 'EventDate': '01/01/1991', 'isImportant': true
        },{
          'id': 2 ,'EventType': 'Wedding-Anniversary', 'PersonName': 'Jane Doe', 'EventDate': '02/12/1997', 'isImportant': true
        },{
          'id': 3 ,'EventType': 'Birthday', 'PersonName': 'Brandon Mckeeson', 'EventDate': '04/11/1987', 'isImportant': true
        },{
          'id': 4 ,'EventType': 'Birthday', 'PersonName': 'Kate Simons', 'EventDate': '04/25/1996', 'isImportant': true
        },{
          'id': 5 ,'EventType': 'Work-StartDate', 'PersonName': 'Kate Simons', 'EventDate': '11/10/2004', 'isImportant': true
        },{
          'id': 6 ,'EventType': 'Work-StartDate', 'PersonName': 'Kate Simons', 'EventDate': '08/15/2002', 'isImportant': true
        },{
          'id': 7 ,'EventType': 'Work-StartDate', 'PersonName': 'Brandon Mckeeson', 'EventDate': '05/29/2009', 'isImportant': true
        },{
          'id': 8 ,'EventType': 'Work-StartDate', 'PersonName': 'Brandon Mckeeson', 'EventDate': '09/01/2017', 'isImportant': true
      }];
  }

  onclick(): void {
    this.events = [{
      'id': 1 ,'EventType': 'Birthday', 'PersonName': 'Jane Doe', 'EventDate': '01/01/1991', 'isImportant': true
    },{
      'id': 2 ,'EventType': 'Wedding-Anniversary', 'PersonName': 'Jane Doe', 'EventDate': '02/12/1997', 'isImportant': true
    },{
      'id': 3 ,'EventType': 'Birthday', 'PersonName': 'Brandon Mckeeson', 'EventDate': '04/11/1987', 'isImportant': true
    },{
      'id': 4 ,'EventType': 'Birthday', 'PersonName': 'Kate Simons', 'EventDate': '04/25/1996', 'isImportant': true
    },{
      'id': 5 ,'EventType': 'Work-StartDate', 'PersonName': 'Kate Simons', 'EventDate': '11/10/2004', 'isImportant': true
    },{
      'id': 6 ,'EventType': 'Work-StartDate', 'PersonName': 'Kate Simons', 'EventDate': '08/15/2002', 'isImportant': true
    },{
      'id': 7 ,'EventType': 'Work-StartDate', 'PersonName': 'Brandon Mckeeson', 'EventDate': '05/29/2009', 'isImportant': true
    },{
      'id': 8 ,'EventType': 'Work-StartDate', 'PersonName': 'Brandon Mckeeson', 'EventDate': '09/01/2017', 'isImportant': true
     },{
      'id': 9 ,'EventType': 'Work-StartDate', 'PersonName': 'Jane Doe', 'EventDate': '10/25/2008', 'isImportant': false
    },{
      'id': 10 ,'EventType': 'Work-EndDate', 'PersonName': 'Brandon Mckeeson', 'EventDate': '12/31/2012', 'isImportant': false
    },{
      'id': 11 ,'EventType': 'Work-EndDate', 'PersonName': 'Brandon Mckeeson', 'EventDate': '03/28/2007', 'isImportant': true
    },{
      'id': 12 ,'EventType': 'Work-EndDate', 'PersonName': 'Jane Doe', 'EventDate': '11/27/2005', 'isImportant': false
    },{
      'id': 13 ,'EventType': 'Work-EndDate', 'PersonName': 'Kate Simons', 'EventDate': '06/07/2012', 'isImportant': false
  }];
  }

  trackByPipelienId(index:number, event:any): number {
    return event.id;
  }


  getPerson1Count(): number
  {
    return this.events.filter(x => x.PersonName === 'Jane Doe').length;
  }

  getPerson2Count(): number
  {
    return this.events.filter(x => x.PersonName === 'Brandon Mckeeson').length;
  }

  getPerson3Count(): number
  {
    return this.events.filter(x => x.PersonName === 'Kate Simons').length;
  }


  onRadioValueChanged(radioBtnValue:string)
  {
    this.selectedPersonName = radioBtnValue;
  }
}

