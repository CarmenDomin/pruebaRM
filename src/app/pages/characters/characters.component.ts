import {Component, OnInit} from '@angular/core';

import {CharactersService} from '../../services/characters.service';
import {Character} from '../../models/character.model';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: Character[];
  public showNotFound = false;
  public searching = false;

  constructor(public charactersService: CharactersService) {
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
}
