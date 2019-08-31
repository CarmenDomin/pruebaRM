import {async, TestBed, ComponentFixture} from '@angular/core/testing';

import {LayoutComponent} from './layout.component';

describe('LayoutComponent', () => {
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LayoutComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(fixture.debugElement.componentInstance).toBeTruthy();
  }));
});
