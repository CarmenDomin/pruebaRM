import {Component} from '@angular/core';
import {async, TestBed, ComponentFixture} from '@angular/core/testing';

import {SpeciesComponent} from '..';

@Component({
  selector: `test-species`,
  template: `<species [species]=species></species>`
})
class TestSpeciesComponent {
  species = 'Human';
}

describe('SpeciesComponent', () => {
  let fixture: ComponentFixture<TestSpeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpeciesComponent,
        TestSpeciesComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestSpeciesComponent);
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(fixture.debugElement.componentInstance).toBeTruthy();
  }));
  it('should get input data', async(() => {
    expect(fixture.debugElement.componentInstance.species).toBe('Human');
  }));
});
