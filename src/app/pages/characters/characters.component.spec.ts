import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http'; 
import {TestBed, async} from '@angular/core/testing';
import {RouterModule} from '@angular/router';

import {CharactersComponent} from './characters.component';

describe('CharactersComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CharactersComponent
      ],
      imports: [
        HttpClientModule,
        RouterModule.forRoot([]),
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(CharactersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
