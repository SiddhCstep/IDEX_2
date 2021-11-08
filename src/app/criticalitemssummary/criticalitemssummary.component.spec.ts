import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalitemssummaryComponent } from './criticalitemssummary.component';

describe('CriticalitemssummaryComponent', () => {
  let component: CriticalitemssummaryComponent;
  let fixture: ComponentFixture<CriticalitemssummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticalitemssummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalitemssummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
