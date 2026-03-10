import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-calendar',
  templateUrl: './add-to-calendar.component.html',
  styleUrls: ['./add-to-calendar.component.scss']
})
export class AddToCalendarComponent {

  @Input() title = '';
  @Input() description = '¡Te esperamos!';
  @Input() location = '';
  @Input() startISO = '';
  @Input() endISO = '';

  private toUTCCompact(iso: string): string {
    const d = new Date(iso);
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, '0');
    const da = String(d.getUTCDate()).padStart(2, '0');
    const hh = String(d.getUTCHours()).padStart(2, '0');
    const mm = String(d.getUTCMinutes()).padStart(2, '0');
    const ss = String(d.getUTCSeconds()).padStart(2, '0');
    return `${y}${m}${da}T${hh}${mm}${ss}Z`;
  }

  get googleUrl(): string {
    const dates = `${this.toUTCCompact(this.startISO)}/${this.toUTCCompact(this.endISO)}`;
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: this.title,
      details: this.description,
      location: this.location,
      dates,
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }

  get outlookUrl(): string {
    const params = new URLSearchParams({
      path: '/calendar/action/compose',
      rru: 'addevent',
      subject: this.title,
      body: this.description,
      location: this.location,
      startdt: new Date(this.startISO).toISOString(),
      enddt: new Date(this.endISO).toISOString(),
    });
    return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
  }

  downloadICS(): void {
    const uid = `wedding-${Date.now()}@coronado`;
    const dtStamp = this.toUTCCompact(new Date().toISOString());
    const dtStart = this.toUTCCompact(this.startISO);
    const dtEnd = this.toUTCCompact(this.endISO);

    const esc = (s: string) =>
      (s || '')
        .replace(/\\/g, '\\\\')
        .replace(/\n/g, '\\n')
        .replace(/,/g, '\\,')
        .replace(/;/g, '\\;');

    const ics =
      `BEGIN:VCALENDAR
      VERSION:2.0
      PRODID:-//Coronado Software Solutions//Wedding Invite//ES
      CALSCALE:GREGORIAN
      METHOD:PUBLISH
      BEGIN:VEVENT
      UID:${uid}
      DTSTAMP:${dtStamp}
      DTSTART:${dtStart}
      DTEND:${dtEnd}
      SUMMARY:${esc(this.title)}
      DESCRIPTION:${esc(this.description)}
      LOCATION:${esc(this.location)}
      END:VEVENT
      END:VCALENDAR`;

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'evento.ics';
    a.click();

    URL.revokeObjectURL(url);
  }
}
