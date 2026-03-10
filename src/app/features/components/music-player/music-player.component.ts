import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit, OnDestroy {
  @Input() label = 'DALE PLAY A NUESTRA CANCIÓN';
  @Input() audioUrl = '';
  @Input() title = '';

  isPlaying = false;
  currentTime = 0;
  duration = 0;
  isFavorite = false;

  private audio?: HTMLAudioElement;
  private rafId?: number;

  ngOnInit(): void {
    this.audio = new Audio(this.audioUrl);
    this.audio.preload = 'metadata';

    this.audio.addEventListener('loadedmetadata', () => {
      this.duration = this.audio?.duration || 0;
    });

    this.audio.addEventListener('ended', () => {
      this.isPlaying = false;
      this.currentTime = this.duration || 0;
      this.stopRaf();
    });
  }

  ngOnDestroy(): void {
    this.stopRaf();

    if (this.audio) {
      this.audio.pause();
      this.audio.src = '';
      this.audio.load();
    }
  }

  toggle(): void {
    if (!this.audio) return;

    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
      this.stopRaf();
    } else {
      this.audio.play().then(() => {
        this.isPlaying = true;
        this.startRaf();
      }).catch(() => {
        this.isPlaying = false;
      });
    }
  }

  back10(): void {
    if (!this.audio) return;
    this.audio.currentTime = Math.max(0, this.audio.currentTime - 10);
    this.currentTime = this.audio.currentTime;
  }

  forward10(): void {
    if (!this.audio) return;
    this.audio.currentTime = Math.min(this.duration || 0, this.audio.currentTime + 10);
    this.currentTime = this.audio.currentTime;
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

  seekTo(percent: number): void {
    if (!this.audio || !this.duration) return;
    const t = Math.max(0, Math.min(1, percent)) * this.duration;
    this.audio.currentTime = t;
    this.currentTime = t;
  }

  onSeekBarClick(ev: MouseEvent, bar: HTMLElement): void {
    const rect = bar.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const pct = rect.width ? x / rect.width : 0;
    this.seekTo(pct);
  }

  get progressPct(): number {
    if (!this.duration) return 0;
    return Math.max(0, Math.min(100, (this.currentTime / this.duration) * 100));
  }

  fmt(sec: number): string {
    const s = Math.floor(sec || 0);
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${m}:${r.toString().padStart(2, '0')}`;
  }

  private startRaf(): void {
    const tick = () => {
      if (!this.audio) return;
      this.currentTime = this.audio.currentTime || 0;
      this.rafId = requestAnimationFrame(tick);
    };
    this.rafId = requestAnimationFrame(tick);
  }

  private stopRaf(): void {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = undefined;
  }
}
