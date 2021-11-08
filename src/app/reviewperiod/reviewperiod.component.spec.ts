import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewperiodComponent } from './reviewperiod.component';

describe('ReviewperiodComponent', () => {
  let component: ReviewperiodComponent;
  let fixture: ComponentFixture<ReviewperiodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewperiodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewperiodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
