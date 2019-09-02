import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {CardComponent, FavoriteComponent, LayoutComponent, SpeciesComponent} from './components';
import {CharactersComponent, CharacterDetailComponent} from './pages';

const Routes = [
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path:  'character-detail/:id',
    component: CharacterDetailComponent,
  },
  {
    path: '**',
    redirectTo: 'characters',
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CharactersComponent,
    CharacterDetailComponent,
    FavoriteComponent,
    LayoutComponent,
    SpeciesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
