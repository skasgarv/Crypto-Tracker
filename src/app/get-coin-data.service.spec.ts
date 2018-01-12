import { TestBed, inject } from '@angular/core/testing';

import { GetCoinDataService } from './get-coin-data.service';

describe('GetCoinDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCoinDataService]
    });
  });

  it('should be created', inject([GetCoinDataService], (service: GetCoinDataService) => {
    expect(service).toBeTruthy();
  }));
});
