import { Component, OnInit } from '@angular/core';
import { ObtenerdatosService } from '../obtenerdatos.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  personajes:any;

  constructor(private obtenerDatos:ObtenerdatosService) { }

  ngOnInit(): void {

    this.personajes = this.obtenerDatos.obtenerDatos();
    console.log(this.personajes);
    
  }

}
