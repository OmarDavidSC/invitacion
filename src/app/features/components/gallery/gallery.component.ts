import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Input() images: string[] = [];

  // decoraciones opcionales
  @Input() flowerTopLeftUrl = 'assets/img/flower-top-left.png';

  @Input() fadeHeight = 140;

}
