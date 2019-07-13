import { TestBed } from '@angular/core/testing';

import { SecondserviceService } from './secondservice.service';

describe('SecondserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecondserviceService = TestBed.get(SecondserviceService);
    expect(service).toBeTruthy();
  });
});
