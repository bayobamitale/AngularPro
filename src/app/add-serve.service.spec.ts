import { TestBed } from '@angular/core/testing';

import { AddServeService } from './add-serve.service';

describe('AddServeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddServeService = TestBed.get(AddServeService);
    expect(service).toBeTruthy();
  });
});
