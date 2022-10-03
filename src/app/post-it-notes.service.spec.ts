import { TestBed } from '@angular/core/testing';

import { PostItNotesService } from './post-it-notes.service';

describe('PostItNotesService', () => {
  let service: PostItNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostItNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
