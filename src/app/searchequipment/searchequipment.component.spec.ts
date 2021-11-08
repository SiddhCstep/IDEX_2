import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchequipmentComponent } from './searchequipment.component';

describe('SearchequipmentComponent', () => {
  let component: SearchequipmentComponent;
  let fixture: ComponentFixture<SearchequipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchequipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchequipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
