import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-romantic-quote',
  templateUrl: './romantic-quote.component.html',
  styleUrls: ['./romantic-quote.component.scss']
})
export class RomanticQuoteComponent {

  @Input() quote = 'Cada momento a tu lado es un recuerdo eterno.';
  @Input() flowerUrl = 'assets/img/flower-top-left.png';

}
