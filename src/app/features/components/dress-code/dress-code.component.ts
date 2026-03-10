import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dress-code',
  templateUrl: './dress-code.component.html',
  styleUrls: ['./dress-code.component.scss']
})
export class DressCodeComponent {

  @Input() groomWhatsappNumber = '';
  @Input() brideWhatsappNumber = '';
  @Input() messageTemplate = '';
  @Input() note =
    'Tu compañía es muy importante para nosotros en este día especial. Por favor confírmanos tu presencia con anticipación.';

  @Input() dressImageUrl = 'assets/img/dress-formal.png';
  @Input() dressTitle = 'Vestimenta';
  @Input() dressValue = 'FORMAL';

  @Input() restrictionTitle = 'Prohibido';
  @Input() restrictedColors = 'Rosado y Blanco';

  @Input() flowerTopRightUrl = '';
  @Input() flowerBottomLeftUrl = '';

  @Input() giftTitle = '';
  @Input() giftNote = '';
  @Input() giftAddress = '';
  @Input() showGiftSection = true;

  buildWhatsAppLink(phone: string): string {
    const clean = (phone || '').replace(/[^\d]/g, '');
    const msg = encodeURIComponent(this.messageTemplate || 'Hola! Confirmo mi asistencia.');
    return `https://wa.me/${clean}?text=${msg}`;
  }

}
