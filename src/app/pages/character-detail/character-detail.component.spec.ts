import {APP_BASE_HREF} from '@angular/common';
import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {of} from 'rxjs';

import {AppModule} from '../,./../../app.module';
import {CharacterDetailComponent} from './character-detail.component';
import {CharactersService} from '../../services/characters.service';

const mockCharacter = {
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  "url": "https://rickandmortyapi.com/api/character/1",
  "created": "2017-11-04T18:48:46.250Z"
};

describe('CharactersDetailComponent', () => {
  let fixture: ComponentFixture<CharacterDetailComponent>;
  const mockCharactersService = jasmine.createSpyObj(['getCharacterDetail']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterModule.forRoot([]),
      ],
      providers: [
        {provide: ActivatedRoute, useValue: {snapshot: {params: {'id': 1}}}},
        {provide: APP_BASE_HREF, useValue : '/' },
        {provide: CharactersService, useValue: mockCharactersService}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDetailComponent);
    mockCharactersService.getCharacterDetail.and.returnValue(of(mockCharacter));
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(fixture.debugElement.componentInstance).toBeTruthy();
  }));
  it('should get data from characters service', async(() => {
    expect(mockCharactersService.getCharacterDetail).toHaveBeenCalledWith(1);
    expect(fixture.debugElement.componentInstance.details).toEqual(mockCharacter);
  }));
});
