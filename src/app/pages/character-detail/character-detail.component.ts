import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CharactersService} from '../../services/characters.service';
import {Character} from '../../models/character.model';

@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {
  private id: number;
  public characterDetail: Character;

  constructor(
    public charactersService: CharactersService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params.id;
  }

  public ngOnInit(): void {
    this.charactersService.getCharacterDetail(this.id).subscribe((data) => {
      this.characterDetail = data;
      console.log(data);
    });
  }
}
