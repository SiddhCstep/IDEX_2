import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptiondataComponent } from './consumptiondata.component';

describe('ConsumptiondataComponent', () => {
  let component: ConsumptiondataComponent;
  let fixture: ComponentFixture<ConsumptiondataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumptiondataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumptiondataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
