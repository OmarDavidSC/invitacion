import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  FechaBoda = new Date('2026-04-30T00:00:00');

  Tiempo = {
    Dias: 0,
    Horas: 0,
    Minutos: 0,
    Segundos: 0
  };

  ngOnInit(): void {
    this.actualizarContador();
    setInterval(() => {
      this.actualizarContador();
    }, 1000);
  }

  actualizarContador() {
    const Ahora = new Date().getTime();
    const Diferencia = this.FechaBoda.getTime() - Ahora;

    if (Diferencia <= 0) return;

    this.Tiempo.Dias = Math.floor(Diferencia / (1000 * 60 * 60 * 24));
    this.Tiempo.Horas = Math.floor((Diferencia / (1000 * 60 * 60)) % 24);
    this.Tiempo.Minutos = Math.floor((Diferencia / 1000 / 60) % 60);
    this.Tiempo.Segundos = Math.floor((Diferencia / 1000) % 60);
  }
}
