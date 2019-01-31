import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrPlanningsComponent } from './pr-plannings.component';

describe('PrPlanningsComponent', () => {
  let component: PrPlanningsComponent;
  let fixture: ComponentFixture<PrPlanningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrPlanningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrPlanningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
