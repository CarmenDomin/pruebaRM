import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {CharactersService} from '../../services/characters.service';
import {Character} from '../../models/character.model';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: Character[];
  public maxPage = 25;
  public minPage = 1;
  public page: number;
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

  public goToPage(stepsToMove: number): void {
    if (stepsToMove === 0) {
      return;
    }
    this.searching = true;
    this.page += stepsToMove;

    this.charactersService.getAllCharacters(this.page).subscribe((data) => {
      this.characters = data;
      this.searching = false;
    });
  }

  public isButtonDisabled(stepsToMove: number): string {
    return this.page + stepsToMove < 1 || this.page + stepsToMove > 25 ? '' : null;
  }
}
