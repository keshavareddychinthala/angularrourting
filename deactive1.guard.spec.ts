import { TestBed, async, inject } from '@angular/core/testing';

import { Deactive1Guard } from './deactive1.guard';

describe('Deactive1Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Deactive1Guard]
    });
  });

  it('should ...', inject([Deactive1Guard], (guard: Deactive1Guard) => {
    expect(guard).toBeTruthy();
  }));
});
