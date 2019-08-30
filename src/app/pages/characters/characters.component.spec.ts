import {APP_BASE_HREF} from '@angular/common';
import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import {of} from 'rxjs';

import {CharactersComponent} from './characters.component';
import {CharactersService} from '../../services/characters.service';

describe('CharactersComponent', () => {
  let fixture: ComponentFixture<CharactersComponent>;
  const mockCharactersService = jasmine.createSpyObj(['getAllCharacters']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CharactersComponent
      ],
      imports: [
        RouterModule.forRoot([]),
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        {provide: CharactersService, useValue: mockCharactersService}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersComponent);
    mockCharactersService.getAllCharacters.and.returnValue(of([]));
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(fixture.debugElement.componentInstance).toBeTruthy();
  }));
  it('should get data from characters service', async(() => {
    expect(mockCharactersService.getAllCharacters).toHaveBeenCalled();
    expect(fixture.debugElement.componentInstance.characters).toEqual([]);
  }));
});
