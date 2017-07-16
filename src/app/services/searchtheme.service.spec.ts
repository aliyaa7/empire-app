import { TestBed, inject } from '@angular/core/testing';

import { SearchthemeService } from './searchtheme.service';

describe('SearchthemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchthemeService]
    });
  });

  it('should be created', inject([SearchthemeService], (service: SearchthemeService) => {
    expect(service).toBeTruthy();
  }));
});
