import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostItComponent } from './add-post-it.component';

describe('AddPostItComponent', () => {
  let component: AddPostItComponent;
  let fixture: ComponentFixture<AddPostItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPostItComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPostItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
