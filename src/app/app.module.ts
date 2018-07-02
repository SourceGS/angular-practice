import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // this is needed for NgModel directive

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { EventComponent } from './components/event/event.component';
import { EventListComponent } from './components/event/event-list/event-list.component';
import { EventListFilterComponent } from './components/event/event-list/event-list-filter/event-list-filter.component';
import { PersonNamePipe } from './pipes/person-name.pipe';

import { ReminderComponent } from './components/reminder/reminder.component';
import { ReminderListComponent } from './components/reminder/reminder-list/reminder-list.component';
import { ReminderListFilterComponent } from './components/reminder/reminder-list/reminder-list-filter/reminder-list-filter.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EventComponent,
    EventListComponent,
    EventListFilterComponent,
    PersonNamePipe,
    ReminderComponent,
    ReminderListComponent,
    ReminderListFilterComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
