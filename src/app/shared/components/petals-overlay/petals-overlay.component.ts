import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-petals-overlay',
  templateUrl: './petals-overlay.component.html',
  styleUrls: ['./petals-overlay.component.scss']
})
export class PetalsOverlayComponent {

  @Input() enabled = true;
  @Input() count = 10; 
  @Input() petalUrl = 'assets/img/petal.png'; 
  @Input() opacity = 0.35; 

}
