import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/Hero.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private _aRoute: ActivatedRoute, private _heroService: HeroService) { }
  Resultados: any = [];
  strBusqueda: string = '';

  // OnInit se ejecuta cuando se termina de renderizar el componente a diferencia del constructor
  ngOnInit(): void {
    // obtener parametros de la ruta activa.
    this._aRoute.params.subscribe( params => {
      this.strBusqueda = params['termino'];
      this.Resultados = this._heroService.searchHeros(params['termino']);
      // console.log(this.Resultados);
    });
  }

  public arrayVacio() {
    if ( this.Resultados.length === 0 ) {
      return true;
    }else {
      return false;
    }
  }

}
