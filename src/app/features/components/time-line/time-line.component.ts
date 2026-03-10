import { Component, Input, OnInit } from '@angular/core';
import { InvitationData } from 'src/app/shared/models/invitation';

export type TimelineIcon =
  | 'ceremony'
  | 'cocktail'
  | 'dance'
  | 'dinner'
  | 'party';

export interface TimelineItem {
  title: string;
  time: string;
  icon: TimelineIcon;
}

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent {

  @Input() items: TimelineItem[] = [];

  matIconFor(icon: TimelineIcon): string {
    switch (icon) {
      case 'ceremony': return 'favorite';
      case 'cocktail': return 'wine_bar';
      case 'dance': return 'music_note';
      case 'dinner': return 'restaurant';
      case 'party': return 'celebration';
    }
  }

}
