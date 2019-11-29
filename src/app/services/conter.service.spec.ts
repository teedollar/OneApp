import { TestBed } from '@angular/core/testing';

import { ConterService } from './conter.service';

describe('ConterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConterService = TestBed.get(ConterService);
    expect(service).toBeTruthy();
  });
});
