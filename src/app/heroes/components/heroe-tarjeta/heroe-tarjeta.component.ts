import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent {
  @Input() heroe!: Heroe;

  heroes: Heroe[] = [];


  constructor(private heroesService: HeroesService){}

  ngOnInit(): void {

    this.heroesService.getHeroes()
      .subscribe( heroes => this.heroes=heroes);
  }

}
