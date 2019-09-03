import {Component, Input} from '@angular/core';

import {Character} from '../../models/character.model';

@Component({
  /* tslint:disable:component-selector */
  selector: 'card',
  /* tslint:enable:component-selector */
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() details: Character;
}
