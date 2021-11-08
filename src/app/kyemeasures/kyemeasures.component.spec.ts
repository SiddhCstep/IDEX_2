import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KyemeasuresComponent } from './kyemeasures.component';

describe('KyemeasuresComponent', () => {
  let component: KyemeasuresComponent;
  let fixture: ComponentFixture<KyemeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KyemeasuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KyemeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
