import {Component} from '@angular/core';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  public characters = [
    {
      id: 0,
      name: 'character 1'
    },
    {
      id: 1,
      name: 'character 2'
    },
    {
      id: 2,
      name: 'character 3'
    }
  ]
}
