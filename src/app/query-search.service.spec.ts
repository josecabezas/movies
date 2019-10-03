import { TestBed } from '@angular/core/testing';

import { QuerySearchService } from './query-search.service';

describe('QuerySearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuerySearchService = TestBed.get(QuerySearchService);
    expect(service).toBeTruthy();
  });
});
