import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  matchingHeroes: Hero[] = [];

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMatchingHeroes();
  }

  getMatchingHeroes() {
    this.activatedRoute.params
        .subscribe(({ keyword }) => {
          this.matchingHeroes = this.heroesService.getHeroByKeyword(keyword);
          console.log(this.matchingHeroes);
        });
  };
}
