import { TestBed } from '@angular/core/testing';

import { PersonCardGuard } from './person-card.guard';

describe('PersonCardGuard', () => {
  let guard: PersonCardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PersonCardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
