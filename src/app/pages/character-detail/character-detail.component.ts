import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CharactersService} from '../../services/characters.service';
import {Character} from '../../models/character.model';

@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  private id: number;
  public details: Character;
  public showPopUp = false;

  constructor(
    public charactersService: CharactersService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params.id;
  }

  public ngOnInit(): void {
    this.charactersService.getCharacterDetail(this.id).subscribe((data) => this.details = data);
  }

  public onClose(e?: Event): void {
    e ? e.stopPropagation() : this.showPopUp = false;
  }

  public onEnlarge(): void {
    this.showPopUp = true;
  }
}
