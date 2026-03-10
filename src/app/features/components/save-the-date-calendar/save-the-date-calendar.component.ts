import { Component, Input, OnInit } from '@angular/core';

type DayCell = {
  day?: number;
  isTarget?: boolean;
};

@Component({
  selector: 'app-save-the-date-calendar',
  templateUrl: './save-the-date-calendar.component.html',
  styleUrls: ['./save-the-date-calendar.component.scss']
})
export class SaveTheDateCalendarComponent implements OnInit {

  @Input() targetISO = '2026-04-30T00:00:00-05:00';

  title = 'Guarde la fecha';
  monthLabel = 'Abril';
  yearLabel = '2026';

  weekdays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  cells: DayCell[] = [];
  targetDay = 30;
  monthIndex = 3;
  year = 2026;

  ngOnInit(): void {
    const d = new Date(this.targetISO);
    this.year = d.getFullYear();
    this.monthIndex = d.getMonth();
    this.targetDay = d.getDate();

    this.yearLabel = String(this.year);
    this.monthLabel = d.toLocaleDateString('es-PE', { month: 'long' });
    this.monthLabel = this.capitalize(this.monthLabel); // "Abril"

    this.buildMonth();
  }

  private buildMonth(): void {
    const first = new Date(this.year, this.monthIndex, 1);
    const daysInMonth = new Date(this.year, this.monthIndex + 1, 0).getDate();

    const jsDay = first.getDay();
    const offsetMonday = (jsDay + 6) % 7;

    const result: DayCell[] = [];

    for (let i = 0; i < offsetMonday; i++) result.push({});

    for (let day = 1; day <= daysInMonth; day++) {
      result.push({
        day,
        isTarget: day === this.targetDay,
      });
    }

    while (result.length % 7 !== 0) result.push({});

    this.cells = result;
  }

  private capitalize(s: string): string {
    if (!s) return s;
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  }

}
