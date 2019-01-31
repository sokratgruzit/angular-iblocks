import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrFlatGridComponent } from './pr-flat-grid.component';

describe('PrFlatGridComponent', () => {
  let component: PrFlatGridComponent;
  let fixture: ComponentFixture<PrFlatGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrFlatGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrFlatGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
