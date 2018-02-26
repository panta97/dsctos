import { Component, OnInit } from '@angular/core';
import { DecimalPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-dscto',
  templateUrl: './dscto.component.html',
  styleUrls: ['./dscto.component.css']
})
export class DsctoComponent implements OnInit {

  precioNormal:number;

  tablas = [
    {
      porcentaje: 0.1,
      aplicado: 0,
      afectados: 'truzas medias, zapatillas'
    },
    {
      porcentaje: 0.18,
      aplicado: 0,
      afectados: 'todas las ropas, pelotas mochilas'
    },
    {
      porcentaje: 0.3,
      aplicado: 0,
      afectados: 'accesorios'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  calcularDsctos(precioNormal) {
    this.tablas = this.tablas.map(ele => {
      ele.aplicado = Math.round((1 - ele.porcentaje) * precioNormal);
      return ele;
    })
  }

}
