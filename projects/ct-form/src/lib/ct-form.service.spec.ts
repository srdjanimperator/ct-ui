import { TestBed } from '@angular/core/testing';

import { CtFormService } from './ct-form.service';

describe('CtFormService', () => {
  let service: CtFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
