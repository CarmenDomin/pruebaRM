import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {CharactersComponent} from './pages/characters/characters.component';
import {CharacterDetailComponent} from './pages/character-detail/character-detail.component';

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
    CharactersComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
