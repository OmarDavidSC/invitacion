import { Component, Input, OnInit } from '@angular/core';
import { LocationInfo } from 'src/app/shared/models/invitation';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {

  @Input() dateISO = '';
  @Input() ceremonyTime = '8:00 PM';
  @Input() partyTime = '8:00 PM';

  @Input() ceremony!: LocationInfo;
  @Input() party!: LocationInfo;

  isExternal(url: string): boolean {
    return /^https?:\/\//i.test(url);
  }

}
