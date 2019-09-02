import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  public isFavorite: boolean;
  @Input() id?: number;

  public ngOnInit() {
    this.isFavorite = this.id && localStorage.getItem(this.id.toString()) === 'true';
  }

  public doFavorite(e: Event): void {
    e.stopPropagation();
    this.isFavorite = !this.isFavorite;

    if (typeof(Storage) !== 'undefined') {
      this.isFavorite ? localStorage.setItem(this.id.toString(), this.isFavorite.toString()) : localStorage.removeItem(this.id.toString());
    } else {
      throw new Error('Sorry! No Web Storage support');
    }
  }
}
