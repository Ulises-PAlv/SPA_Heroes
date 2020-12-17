import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent implements OnInit {

  // Recibir info. de un componente PADRE
  @Input() PadreHero: any = {}; // vendra de un elemento externo
  @Input() Index: number;

  // Para mandar información del hijo a un padre utilizamos Output
  @Output() selectedHero: EventEmitter<number>;

  constructor( private _router: Router ) {
    this.selectedHero = new EventEmitter();
  }

  ngOnInit(): void {
  }

  Navegar() {
    this._router.navigate(['/hero', this.Index]);
  }

}
