import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandeja-principal',
  templateUrl: './bandeja-principal.component.html',
  styleUrls: ['./bandeja-principal.component.scss']
})
export class BandejaPrincipalComponent implements OnInit {

  isLoading = true;
  isClosingLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  closeLoading() {
    this.isClosingLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1200);
  }

  enviarConfirmacion() {

    const Telefono = "51976339443";

    const Mensaje =
      "¡Hola! \n" +
      "Con mucha alegría confirmo mi asistencia a su boda el 30 de abril de 2026.\n" +
      "Será un honor acompañarlos en este día tan especial.";

    const uri = `https://wa.me/${Telefono}?text=${encodeURIComponent(Mensaje)}`;

    window.open(uri, "_blank");
  }
}
