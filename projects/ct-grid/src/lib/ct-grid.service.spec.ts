import { TestBed } from '@angular/core/testing';

import { CtGridService } from './ct-grid.service';

describe('CtGridService', () => {
  let service: CtGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
