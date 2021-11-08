import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalitemsaddremoveComponent } from './criticalitemsaddremove.component';

describe('CriticalitemsaddremoveComponent', () => {
  let component: CriticalitemsaddremoveComponent;
  let fixture: ComponentFixture<CriticalitemsaddremoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticalitemsaddremoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalitemsaddremoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
