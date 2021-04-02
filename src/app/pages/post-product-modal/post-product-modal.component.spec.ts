import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProductModalComponent } from './post-product-modal.component';

describe('PostProductModalComponent', () => {
  let component: PostProductModalComponent;
  let fixture: ComponentFixture<PostProductModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostProductModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
