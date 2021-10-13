import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero!: Hero;


  constructor(private heroesService: HeroesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHero();
  }


  getHero() {
    this.activatedRoute.params
        .subscribe(({ idHero }) => {
          this.hero = this.heroesService.getHero(idHero)!;

          if (!this.hero) {
            this.router.navigateByUrl('/heroes/list');
            return;
          };

        });
  };

  setHomeImage() {
    return (this.hero.home === 'Marvel') ? 'assets/images/marvel.png' : 'assets/images/dc.png';
  };

  back() {
    window.history.back();
  };
}
