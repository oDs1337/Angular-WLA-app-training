import { TestBed } from '@angular/core/testing';

import { DrinksApiService } from './drinks-api-service';

describe('DrinksApiService', () => {
  let service: DrinksApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinksApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
