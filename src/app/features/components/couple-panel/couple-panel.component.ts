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
    'Dios permitió que nuestros caminos se encontraran y que nuestros corazones se unieran. Hoy, con su bendición, comenzamos una nueva etapa de amor, prometiendo caminar juntos para toda la vida.';

  @Input() parentsIntro = 'Así que con la bendición de Dios y de nuestros padres';
  @Input() brideParents: string[] = [];
  @Input() groomParents: string[] = [];

  @Input() dateISO = '2026-11-21T10:00:00-05:00';

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
