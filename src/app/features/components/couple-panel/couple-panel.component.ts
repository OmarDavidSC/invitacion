import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-couple-panel',
  templateUrl: './couple-panel.component.html',
  styleUrls: ['./couple-panel.component.scss']
})
export class CouplePanelComponent {

  @Input() brideName = '';
  @Input() groomName = '';

  @Input() blessingText =
    'Jehová nos dio la gran bendición de llegar a conocernos y ahora nos da la oportunidad de estar juntos para siempre en una cuerda triple.';

  @Input() parentsIntro = 'Así que con la bendición de Jehová y de nuestros padres';
  @Input() brideParents: string[] = [];
  @Input() groomParents: string[] = [];

  @Input() dateISO = '2026-04-30T10:00:00-05:00';

  @Input() coupleImageUrl = 'assets/img/couple-illustration.png';
  @Input() ringsImageUrl = 'assets/img/anillos.png';

  @Input() flowerTopLeftUrl = 'assets/img/flower-left.png';
  @Input() flowerTopRightUrl = 'assets/img/flower-right.png';
  @Input() floralBottomLeftUrl = 'assets/img/flower.png';

  @Input() paperTextureUrl = '';
  @Input() showConfetti = false;

  get monthShort(): string {
    const d = new Date(this.dateISO);
    return d.toLocaleDateString('es-PE', { month: 'short' }).toUpperCase();
  }

  get dayNumber(): string {
    const d = new Date(this.dateISO);
    return String(d.getDate()).padStart(2, '0');
  }

  get yearNumber(): string {
    const d = new Date(this.dateISO);
    return String(d.getFullYear());
  }

  get weekdayName(): string {
    const d = new Date(this.dateISO);
    return d.toLocaleDateString('es-PE', { weekday: 'long' }).toUpperCase();
  }

  get timeLabel(): string {
    const d = new Date(this.dateISO);
    return d.toLocaleTimeString('es-PE', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).toUpperCase();
  }
}
