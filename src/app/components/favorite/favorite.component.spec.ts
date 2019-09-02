import {Component} from '@angular/core';
import {async, TestBed, ComponentFixture} from '@angular/core/testing';

import {FavoriteComponent, SpeciesComponent} from '..';

@Component({
  selector: `test-favorite`,
  template: `<favorite id="${1}"></favorite>`
})
class TestFavoriteComponent {
}

describe('FavoriteComponent', () => {
  let fixture: ComponentFixture<TestFavoriteComponent>;
  let store = {};
  const mockLocalStorage = {
    getItem: (key: string): string => {
      return key in store ? store[key] : null;
    },
    setItem: (key: string, value: string) => {
      store[key] = `${value}`;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FavoriteComponent,
        SpeciesComponent,
        TestFavoriteComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestFavoriteComponent);
    fixture.detectChanges();

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);

    localStorage.setItem('1', 'true');
  }));

  it('should create the app', async(() => {
    expect(fixture.debugElement.componentInstance).toBeTruthy();
  }));
  it('should return isFavorite from localStorage', async(() => {
    expect(fixture.debugElement.componentInstance.isFavorite).toBeTruthy;
  }));
});
