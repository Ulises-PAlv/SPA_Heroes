import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/Hero.services';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  // Variable que almcanena la respuesta de metodo que se encuentra en el servicio _heroService
  hero: any = {};

  constructor(private _router:ActivatedRoute, private _heroService: HeroService) { 
    this._router.params.subscribe( params => {
      console.log(params['id']);
      this.hero = this._heroService.getHero(params['id']);
      console.log(this.hero);
    } );
  }

  ngOnInit(): void {
  }

  public getCasa() {
    if(this.hero.casa == 'Marvel') {
      return true;
    }else {
      return false;
    }
  }
}
