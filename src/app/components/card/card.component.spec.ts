import {async, TestBed, ComponentFixture} from '@angular/core/testing';

import {CardComponent} from './card.component';

describe('CardComponent', () => {
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(fixture.debugElement.componentInstance).toBeTruthy();
  }));
  it('should get input data', async(() => {
    expect(fixture.debugElement.componentInstance.details).not.toBeUndefined;
  }));
});
