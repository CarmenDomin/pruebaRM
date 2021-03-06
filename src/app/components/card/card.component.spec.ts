import {Component} from '@angular/core';
import {async, TestBed, ComponentFixture} from '@angular/core/testing';

import {CardComponent, FavoriteComponent, SpeciesComponent} from '..';

const mockCharacter = {
  'id': 1,
  'name': 'Rick Sanchez',
  'status': 'Alive',
  'species': 'Human',
  'type': '',
  'gender': 'Male',
  'origin': {
    'name': 'Earth',
    'url': 'https://rickandmortyapi.com/api/location/1'
  },
  'location': {
    'name': 'Earth',
    'url': 'https://rickandmortyapi.com/api/location/20'
  },
  'image': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  'episode': [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
  ],
  'url': 'https://rickandmortyapi.com/api/character/1',
  'created': '2017-11-04T18:48:46.250Z'
};

@Component({
  selector: `test-card`,
  template: `<card [details]=details></card>`
})
class TestCardComponent {
  details = mockCharacter;
}

describe('CardComponent', () => {
  let fixture: ComponentFixture<TestCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardComponent,
        FavoriteComponent,
        SpeciesComponent,
        TestCardComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestCardComponent);
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(fixture.debugElement.componentInstance).toBeTruthy();
  }));
  it('should get input data', async(() => {
    expect(fixture.debugElement.componentInstance.details).toBe(mockCharacter);
  }));
});
