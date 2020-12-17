import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/Hero.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private _aRoute: ActivatedRoute, private _heroService: HeroService, private _router: Router) { }
  
  Resultados: any = [];
  strBusqueda: string = '';
  @Input() Index: number;

  // OnInit se ejecuta cuando se termina de renderizar el componente a diferencia del constructor
  ngOnInit(): void {
    // obtener parametros de la ruta activa.
    this._aRoute.params.subscribe( params => {
      this.strBusqueda = params['termino'];
    });

    this._heroService.searchHeroes(this.strBusqueda).subscribe((data: any) => {
      this.Resultados = data;
    })
  }

  public arrayVacio() {
    if ( this.Resultados.length === 0 ) {
      return true;
    }else {
      return false;
    }
  }

  Navegar() {
    this._router.navigate(['/hero', this.Index]);
  }

}
