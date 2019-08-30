import {Component, OnInit} from '@angular/core';

import {CharactersService} from '../../services/characters.service';
import {Character} from '../../models/character.model';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public characters: Character[];

  constructor(public charactersService: CharactersService) {
  }

  public ngOnInit(): void {
    this.charactersService.getAllCharacters().subscribe((data) => {
      this.characters = data;
      console.log(data);
    });
  }
}
