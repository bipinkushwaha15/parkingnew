import { TestBed } from '@angular/core/testing';

import { SearchPlaceService } from './search-place.service';

describe('SearchPlaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchPlaceService = TestBed.get(SearchPlaceService);
    expect(service).toBeTruthy();
  });
});
