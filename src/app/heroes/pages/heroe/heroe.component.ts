import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {


  heroe!: Heroe;


  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.heroesService.getHeroePorId(id)) 
    )
      .subscribe(heroes => this.heroe = heroes)
    
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }
}
