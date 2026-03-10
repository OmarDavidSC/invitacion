import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent {

  @Input() whatsappNumber = '';
  @Input() messageTemplate = '';

  get whatsappLink(): string {
    const msg = encodeURIComponent(this.messageTemplate || 'Hola! Confirmo mi asistencia.');
    const phone = (this.whatsappNumber || '').replace(/[^\d]/g, '');
    return `https://wa.me/${phone}?text=${msg}`;
  }

}
