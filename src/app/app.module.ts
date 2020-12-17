import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

// Rutas
import { RouterModule } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HeroComponent } from './components/hero/hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizadoPipe } from './pipes/capitalizado/capitalizado.pipe';
import { DomSeguroPipe } from './pipes/DomSeguro/dom-seguro.pipe';
import { PasswordPipe } from './pipes/password/password.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroesComponent,
    AboutComponent,
    HomeComponent,
    Error404Component,
    HeroComponent,
    BuscadorComponent,
    HeroCardComponent,
    PipesComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'heroes', component: HeroesComponent},
      // Gracias al /: parametros nuestra ruta se prepara para decidir un parámetro o un valor dinámico
      {path: 'hero/:id', component: HeroComponent},
      {path: 'results/:termino', component: BuscadorComponent},
      {path: 'pipes', component: PipesComponent},
      {path: '**', pathMatch: 'full', component: Error404Component}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
