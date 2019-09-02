import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

import {Character} from '../models/character.model';

const endpoint = 'https://rickandmortyapi.com/api/';

interface CharactersOutput {
  info: {
    count: number;
    next: string;
    prev: string;
  }
  results: Character[];
}

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private _page = 1;
  constructor(private http: HttpClient) {
  }

  public get page(): number {
    return this._page;
  };

  public set page(page: number) {
    this._page = page;
  };

  public getAllCharacters(page?: number): Observable<Character[]> {
    if (page) {
      this.page = page;
    }
    return this.http.get(endpoint + 'character?page=' + this.page).pipe(map((data: CharactersOutput) => data.results));
  }

  public getCharacterDetail(id: number): Observable<Character> {
    return this.http.get(endpoint + 'character/' + id) as Observable<Character>;
  }

  public getCharactersByName(name: string): Observable<Character[]> {
    return this.http.get(endpoint + 'character/?name=' + name).pipe(
      map((data: CharactersOutput) => data.results),
      catchError(_ => of([])));
  }

  public getMultipleCharacters(ids: number[]): Observable<Character[]> {
    return this.http.get(endpoint + 'character/' + ids.join(',')) as Observable<Character[]>;
  }
}
