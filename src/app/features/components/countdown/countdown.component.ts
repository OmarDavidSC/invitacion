import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  @Input() targetDateISO = '';

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  private timerId?: number;

  ngOnInit(): void {
    this.update();
    this.timerId = window.setInterval(() => this.update(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timerId) window.clearInterval(this.timerId);
  }

  private update(): void {
    const target = new Date(this.targetDateISO).getTime();
    const now = Date.now();
    const diff = Math.max(0, target - now);

    const totalSeconds = Math.floor(diff / 1000);

    this.days = Math.floor(totalSeconds / 86400);
    this.hours = Math.floor((totalSeconds % 86400) / 3600);
    this.minutes = Math.floor((totalSeconds % 3600) / 60);
    this.seconds = totalSeconds % 60;
  }

  pad(n: number): string {
    return n.toString().padStart(2, '0');
  }
}


