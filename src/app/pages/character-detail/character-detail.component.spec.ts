import {APP_BASE_HREF} from '@angular/common';
import {TestBed, async} from '@angular/core/testing';
import {RouterModule} from '@angular/router';

import {CharacterDetailComponent} from './character-detail.component';

describe('CharactersDetailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CharacterDetailComponent
      ],
      imports: [
        RouterModule.forRoot([]),
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(CharacterDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
