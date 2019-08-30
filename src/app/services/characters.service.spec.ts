import {HttpClientModule} from '@angular/common/http'; 
import {TestBed, async} from '@angular/core/testing';

import {CharactersService} from './characters.service';

describe('CharactersService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: CharactersService = TestBed.get(CharactersService);
    expect(service).toBeTruthy();
  });
});
