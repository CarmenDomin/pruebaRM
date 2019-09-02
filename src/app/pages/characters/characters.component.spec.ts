import {APP_BASE_HREF} from '@angular/common';
import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import {of} from 'rxjs';

import {AppModule} from '../,./../../app.module';
import {CharactersComponent} from './characters.component';
import {CharactersService} from '../../services/characters.service';

describe('CharactersComponent', () => {
  let fixture: ComponentFixture<CharactersComponent>;
  const mockCharactersService = jasmine.createSpyObj(['getAllCharacters', 'getCharactersByName']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterModule.forRoot([]),
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        {provide: CharactersService, useValue: mockCharactersService}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersComponent);
    mockCharactersService.getAllCharacters.and.returnValue(of([]));
    mockCharactersService.getCharactersByName.and.returnValue(of([{id: 4}]));
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(fixture.debugElement.componentInstance).toBeTruthy();
  }));
  it('should get data from characters service', async(() => {
    expect(mockCharactersService.getAllCharacters).toHaveBeenCalled();
    expect(fixture.debugElement.componentInstance.characters).toEqual([]);
  }));
  it('should filter characters by name', async(() => {
    fixture.debugElement.componentInstance.filter('rick');

    expect(mockCharactersService.getCharactersByName).toHaveBeenCalledWith('rick');
    expect(fixture.debugElement.componentInstance.characters).toEqual([{id: 4}]);
    expect(fixture.debugElement.componentInstance.showNotFound).not.toBeTruthy;
  }));
  it('should show not found message', async(() => {
    mockCharactersService.getCharactersByName.and.returnValue(of([]));
    fixture.debugElement.componentInstance.filter('ifkhygi');

    expect(mockCharactersService.getCharactersByName).toHaveBeenCalledWith('ifkhygi');
    expect(fixture.debugElement.componentInstance.characters).toEqual([]);
    expect(fixture.debugElement.componentInstance.showNotFound).toBeTruthy;
  }));
  it('should go to the specified page', async(() => {
    fixture.debugElement.componentInstance.page = 3;
    fixture.debugElement.componentInstance.goToPage(2);

    expect(fixture.debugElement.componentInstance.page).toBe(5);
    expect(mockCharactersService.getAllCharacters).toHaveBeenCalledWith(5);
  }));
  it('should disable button', async(() => {
    fixture.debugElement.componentInstance.page = 3;
    expect(fixture.debugElement.componentInstance.isButtonDisabled(-3)).not.toBeTruthy;
  }));
});
