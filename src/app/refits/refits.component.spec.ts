import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefitsComponent } from './refits.component';

describe('RefitsComponent', () => {
  let component: RefitsComponent;
  let fixture: ComponentFixture<RefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
