import { Component, Input, OnInit } from '@angular/core';
import { LocationInfo } from 'src/app/shared/models/invitation';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {

  @Input() dateISO = '';
  @Input() ceremonyTime = '5:00 PM';
  @Input() civilTime = '6:00 PM';
  @Input() partyTime = '7:00 PM';

  @Input() ceremony!: LocationInfo;
  @Input() civil!: LocationInfo;
  @Input() party!: LocationInfo;

  isExternal(url: string): boolean {
    return /^https?:\/\//i.test(url);
  }

}
