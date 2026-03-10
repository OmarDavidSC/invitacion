import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floral-separator',
  templateUrl: './floral-separator.component.html',
  styleUrls: ['./floral-separator.component.scss']
})
export class FloralSeparatorComponent {

  @Input() flowerUrl = 'assets/img/separator-flower.png'; 
  @Input() lineOpacity = 0.35;
}
