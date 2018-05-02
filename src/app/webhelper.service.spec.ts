import { TestBed, inject } from '@angular/core/testing';

import { WebhelperService } from './webhelper.service';

describe('WebhelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebhelperService]
    });
  });

  it('should be created', inject([WebhelperService], (service: WebhelperService) => {
    expect(service).toBeTruthy();
  }));
});
