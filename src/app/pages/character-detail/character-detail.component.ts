import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent {
  public id: number;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
  }
}
