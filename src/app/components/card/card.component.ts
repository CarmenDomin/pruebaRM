import {Component, Input} from '@angular/core';

import {Character} from '../../models/character.model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() details: Character;
}
