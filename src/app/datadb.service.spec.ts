import { TestBed, inject } from '@angular/core/testing';

import { DatadbService } from './datadb.service';

describe('DatadbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatadbService]
    });
  });

  it('should be created', inject([DatadbService], (service: DatadbService) => {
    expect(service).toBeTruthy();
  }));
});
