import {Component, HostBinding, Input} from '@angular/core';

@Component({
  /* tslint:disable:component-selector */
  selector: 'species',
  /* tslint:enable:component-selector */
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
    let hash = 6; // random value
    for (let i = 0; i < this.species.length; i++) {
      /* tslint:disable:no-bitwise */
      hash = this.species.charCodeAt(i) + ((hash << 5) - hash);
      /* tslint:enable:no-bitwise */
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
      /* tslint:disable:no-bitwise */
      colour += ('00' + ((hash >> (i * 8)) & 0xFF).toString(16)).substr(-2);
      /* tslint:enable:no-bitwise */
    }
    return colour;
  }
}
