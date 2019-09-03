import {Component} from '@angular/core';
import {async, TestBed, ComponentFixture} from '@angular/core/testing';

import {FavoriteComponent, SpeciesComponent} from '..';

@Component({
  selector: `test-favorite`,
  template: `<favorite [id]=id></favorite>`
})
class TestFavoriteComponent {
  id = 1;
}

describe('FavoriteComponent', () => {
  let fixture: ComponentFixture<TestFavoriteComponent>;
  const store = {};
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
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(fixture.debugElement.componentInstance).toBeTruthy();
  }));
  it('should get input data', async(() => {
    expect(fixture.debugElement.componentInstance.id).toBe(1);
  }));
});
