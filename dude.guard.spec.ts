import { TestBed, async, inject } from '@angular/core/testing';

import { DudeGuard } from './dude.guard';

describe('DudeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DudeGuard]
    });
  });

  it('should ...', inject([DudeGuard], (guard: DudeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
