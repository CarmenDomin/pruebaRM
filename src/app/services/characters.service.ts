import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Character} from '../models/character.model';

const endpoint = 'https://rickandmortyapi.com/api/';

interface AllCharactersOutput {
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
    return this.http.get(endpoint + 'character').pipe(map((data: AllCharactersOutput) => data.results));
  }

  public getCharacterDetail(id: number): Observable<Character> {
    return this.http.get(endpoint + 'character/' + id) as Observable<Character>;
  }
}
