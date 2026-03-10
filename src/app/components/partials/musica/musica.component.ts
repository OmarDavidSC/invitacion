import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.scss']
})
export class MusicaComponent implements AfterViewInit {

  constructor() { }


  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>;
  isPlaying = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.audio.nativeElement.play()
        .then(() => {
          this.isPlaying = true;
        })
        .catch(() => {
          this.isPlaying = false;
        });
    }, 500);
  }

  toggleMusic() {
    if (this.isPlaying) {
      this.audio.nativeElement.pause();
    } else {
      this.audio.nativeElement.play();
    }
    this.isPlaying = !this.isPlaying;
  }

}
