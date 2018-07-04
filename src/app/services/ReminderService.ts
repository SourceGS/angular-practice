import { Injectable  } from '@angular/core';

@Injectable()
export class ReminderService {

getReminders(): any {
 return  [{
    id: 1 , EventType: 'Birthday', PersonName: 'Jane Doe', EventDate: '01/01/1991', isImportant: true }, {
    id: 2 , EventType: 'Wedding' , PersonName: 'Jane Doe', EventDate: '02/12/1997', isImportant: true }, {
    id: 3 , EventType: 'Birthday', PersonName: 'Brandy M', EventDate: '04/11/1987', isImportant: true }, {
    id: 4 , EventType: 'Birthday', PersonName: 'Kate Sim', EventDate: '04/25/1996', isImportant: true }, {
    id: 5 , EventType: 'WorkDate', PersonName: 'Kate Sim', EventDate: '11/10/2004', isImportant: true }, {
    id: 6 , EventType: 'WorkDate', PersonName: 'Kate Sim', EventDate: '08/15/2002', isImportant: true }, {
    id: 7 , EventType: 'WorkDate', PersonName: 'Brandy M', EventDate: '05/29/2009', isImportant: true }, {
    id: 8 , EventType: 'WorkDate', PersonName: 'Brandy M', EventDate: '09/01/2017', isImportant: true }] ;
}


getRemindersRefresh(): any {
  return   [{
        id: 1  , EventType: 'Birthday', PersonName: 'Jane Doe', EventDate: '01/01/1991', isImportant: true }, {
        id: 2  , EventType: 'Wedding' , PersonName: 'Jane Doe', EventDate: '02/12/1997', isImportant: true }, {
        id: 3  , EventType: 'Birthday', PersonName: 'Brandy M', EventDate: '04/11/1987', isImportant: true }, {
        id: 4  , EventType: 'Birthday', PersonName: 'Kate Sim', EventDate: '04/25/1996', isImportant: true }, {
        id: 5  , EventType: 'WorkDate', PersonName: 'Kate Sim', EventDate: '11/10/2004', isImportant: true }, {
        id: 6  , EventType: 'WorkDate', PersonName: 'Kate Sim', EventDate: '08/15/2002', isImportant: true }, {
        id: 7  , EventType: 'WorkDate', PersonName: 'Brandy M', EventDate: '05/29/2009', isImportant: true }, {
        id: 8  , EventType: 'WorkDate', PersonName: 'Brandy M', EventDate: '09/01/2017', isImportant: true }, {
        id: 9  , EventType: 'WorkDate', PersonName: 'Jane Doe', EventDate: '10/25/2008', isImportant: false}, {
        id: 10 , EventType: 'WorkDate', PersonName: 'Brandy M', EventDate: '12/31/2012', isImportant: false}, {
        id: 11 , EventType: 'WorkDate', PersonName: 'Brandy M', EventDate: '03/28/2007', isImportant: true }, {
        id: 12 , EventType: 'WorkDate', PersonName: 'Jane Doe', EventDate: '11/27/2005', isImportant: false}, {
        id: 13 , EventType: 'WorkDate', PersonName: 'Kate Sim', EventDate: '06/07/2012', isImportant: false}];
}

}
