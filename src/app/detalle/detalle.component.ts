import { Component, OnInit } from '@angular/core';
import { ObtenerdatosService } from '../obtenerdatos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  personajes:any;
  id:number = 0;
  item:any;

  constructor(private obtenerDatos:ObtenerdatosService) { }

  ngOnInit(): void {

    this.personajes = this.obtenerDatos.obtenerDatos();
    console.log(this.personajes[this.id]);
    this.item = this.personajes[this.id];

  }

}
