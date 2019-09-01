import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent {
  @Input() species: string;

  @HostBinding('style.color')
  public get color(): string {
    return this.species ? this.getColor() : '';
  }

  @HostBinding('style.border-color')
  public get borderColor(): string {
    return this.species ? this.getColor() : '';
  }

  private getColor(): string {
    var hash = 6; // random value
    for (var i = 0; i < this.species.length; i++) {
      hash = this.species.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
      colour += ('00' + ((hash >> (i * 8)) & 0xFF).toString(16)).substr(-2);
    }
    return colour;
  }
}
