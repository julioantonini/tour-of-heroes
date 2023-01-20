import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'http://localhost:3000/api/heroes';

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.httpClient
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap((heroes) => this.log(`fetched ${heroes.length} heroes`)));
    // const heroes = of(HEROES);
    // this.log('fetched heroes');
    // return heroes;
  }

  getHero(id: number): Observable<Hero> {
    return this.httpClient
      .get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(tap((hero) => this.log(`fetched hero id: ${hero.id}`)));
  }

  update(hero: Hero) {}

  private log(message: string): void {
    this.messageService.add(`heroService: ${message}`);
  }
}
