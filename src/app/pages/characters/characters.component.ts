import {Component, OnInit} from '@angular/core';

import {CharactersService} from '../../services/characters.service';
import {Character} from '../../models/character.model';

@Component({
  /* tslint:disable:component-selector */
  selector: 'characters',
  /* tslint:enable:component-selector */
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: Character[];
  public favorites = false;
  public maxPage = 25;
  public minPage = 1;
  public page: number;
  public showNotFavorites = false;
  public showNotFound = false;
  public searching = false;

  constructor(public charactersService: CharactersService) {
    this.page = this.charactersService.page;
  }

  public ngOnInit(): void {
    this.charactersService.getAllCharacters().subscribe((data) => this.characters = data);
  }

  public filter(input: string) {
    this.searching = true;

    this.charactersService.getCharactersByName(input).subscribe((data) => {
      this.characters = data;
      this.showNotFound = (this.characters.length < 1);
      this.searching = false;
    });
  }

  public goToPage(stepsToMove?: number): void {
    if (stepsToMove === 0) {
      return;
    }
    this.searching = true;
    this.page = stepsToMove ? this.page + stepsToMove : this.page;

    this.charactersService.getAllCharacters(this.page).subscribe((data) => {
      this.characters = data;
      this.searching = false;
    });
  }

  public isButtonDisabled(stepsToMove: number): string {
    return this.page + stepsToMove < 1 || this.page + stepsToMove > 25 ? '' : null;
  }

  public goToAllCharacters(): void {
    this.favorites = false;
    this.showNotFavorites = false;

    this.goToPage();
  }

  public goToFavorites(): void {
    this.favorites = true;
    this.searching = true;
    const favorites = Object.keys({...localStorage}).map((key: string) => parseInt(key, 10));

    this.showNotFavorites = favorites.length === 0;
    if (this.showNotFavorites) {
      this.characters = [];
      return;
    }

    this.charactersService.getMultipleCharacters(favorites).subscribe((data) => {
      this.characters = data;
      this.searching = false;
    });
  }
}
