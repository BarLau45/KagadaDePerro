import { TestBed } from '@angular/core/testing';

import { BoardGetterService } from './board-getter.service';

describe('BoardGetterService', () => {
  let service: BoardGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
