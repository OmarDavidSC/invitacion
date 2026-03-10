import { Component, Input, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
})
export class SectionTitleComponent {

  @Input() eyebrow = '';
  @Input() title = '';
  @Input() subtitle = '';

}
