import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandmonitorComponent } from './demandmonitor.component';

describe('DemandmonitorComponent', () => {
  let component: DemandmonitorComponent;
  let fixture: ComponentFixture<DemandmonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandmonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandmonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
