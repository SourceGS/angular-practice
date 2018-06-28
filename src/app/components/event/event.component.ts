import { Component } from '@angular/core';

@Component({ selector: 'app-event' , templateUrl: './event.component.html', styleUrls: ['./event.component.css' ] })
export class EventComponent {

    Pipeline = 'AGT';
    Desk = 'Desk A';
    Controller = 'John Doe';
    EventType = 'Alarm Action';
    EventOrigin = 'RTU';
    DeviceType = 'Meter Station';
    Device = 'MR-001';

    titleColSpan =  2;
    tableTitle = 'Event Info';

    boldClass = 'bolditem';
    redFontClass = 'redcolor';
    isRedColor = true;
    isBold = true;

    showEventlog = true;

    getClasses() {
        const classes = {
            bolditem : this.isBold,
            redcolor : this.isRedColor

        };
        return classes;
    }

    onclick() {
        this.showEventlog = !this.showEventlog;
    }
}
