import {HttpClientModule} from '@angular/common/http'; 
import {async, inject, TestBed} from '@angular/core/testing';

import {CharactersService} from './characters.service';

describe('CharactersService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    }).compileComponents();
  }));

  it('should be created', inject([CharactersService], (service: CharactersService) => {
    expect(service).toBeTruthy();
  }));
  it('should get first 20 characters', inject([CharactersService], (service: CharactersService) => {
    service.getAllCharacters().subscribe((data) => {
      expect(data.length).toBe(20);
    });
  }));
  it('should get the 20 characters of the selected page', inject([CharactersService], (service: CharactersService) => {
    service.getAllCharacters(3).subscribe((data) => {
      expect(data.length).toBe(20);
    });
  }));
  it('should get the first character', inject([CharactersService], (service: CharactersService) => {
    service.getCharacterDetail(1).subscribe((data) => {
      expect(data.id).toBe(1);
    });
  }));
  it('should get characters by name', inject([CharactersService], (service: CharactersService) => {
    service.getCharactersByName('rick').subscribe((data) => {
      data.forEach((item) => expect(item.name).toContain('rick'));
    });
  }));
  it('should get multipe characters by ids', inject([CharactersService], (service: CharactersService) => {
    service.getMultipleCharacters([1, 2]).subscribe((data) => {
      expect(data.length).toBe(2);
      expect(data[0].id).toBe(1);
      expect(data[1].id).toBe(2);
    });
  }));
});
