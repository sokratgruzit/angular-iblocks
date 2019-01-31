import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrFloorViewComponent } from './pr-floor-view.component';

describe('PrFloorViewComponent', () => {
  let component: PrFloorViewComponent;
  let fixture: ComponentFixture<PrFloorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrFloorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrFloorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
