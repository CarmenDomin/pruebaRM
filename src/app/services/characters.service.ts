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

  constructor(private http: HttpClient) {
  }

  public getAllCharacters(): Observable<Character[]> {
    return this.http.get(endpoint + 'character').pipe(map((data: CharactersOutput) => data.results));
  }

  public getCharacterDetail(id: number): Observable<Character> {
    return this.http.get(endpoint + 'character/' + id) as Observable<Character>;
  }

  public getCharactersByName(name: string): Observable<Character[]> {
    return this.http.get(endpoint + 'character/?name=' + name).pipe(
      map((data: CharactersOutput) => data.results),
      catchError(_ => of([])));
  }
}
