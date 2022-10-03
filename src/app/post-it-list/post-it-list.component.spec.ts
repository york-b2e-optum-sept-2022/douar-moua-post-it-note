import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItListComponent } from './post-it-list.component';

describe('PostItListComponent', () => {
  let component: PostItListComponent;
  let fixture: ComponentFixture<PostItListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostItListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostItListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
