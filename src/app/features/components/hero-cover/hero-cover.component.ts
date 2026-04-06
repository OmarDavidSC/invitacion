import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-cover',
  templateUrl: './hero-cover.component.html',
  styleUrls: ['./hero-cover.component.scss']
})
export class HeroCoverComponent {

  @Input() quote = '';
  @Input() blurb = '';
  @Input() names = '';
  @Input() monogram = '';
  @Input() coverImageUrl = '';

  @Input() cornerFlowerUrl = 'assets/img/corner-flower.png';
}
