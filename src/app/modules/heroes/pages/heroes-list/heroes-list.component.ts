import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../services/heroes.service';
import { SharingService } from '../../../../core/services/sharing.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[] = [];


  constructor(private heroesService: HeroesService,
              sharingService: SharingService) {
    sharingService.showSearchInputValue = true;
  }

  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes() {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes)
  };

}
