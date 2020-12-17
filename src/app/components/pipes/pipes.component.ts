import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})

export class PipesComponent implements OnInit {

  Nombre: string = 'Ulises Alvirde';
  NombreAlterno:string = 'UliSes ALviRdE';
  ArrayPrueba = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
  pi = Math.PI;
  fecha = new Date();
  precio = 199.99;
  VideoURL = 'https://www.youtube.com/embed/ODsqyfI5R28';
  mostrar = true;

  constructor() { }

  ngOnInit(): void {
  }

}
