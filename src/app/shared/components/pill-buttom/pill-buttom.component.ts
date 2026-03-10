import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pill-buttom',
  templateUrl: './pill-buttom.component.html',
  styleUrls: ['./pill-buttom.component.scss']
})
export class PillButtomComponent {

  @Input() label = 'Abrir';
  @Input() href = '';
  @Input() icon = '↗';

  isExternal(url: string): boolean {
    return /^https?:\/\//i.test(url);
  }

}
