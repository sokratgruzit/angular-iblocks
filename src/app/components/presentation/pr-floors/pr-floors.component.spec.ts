import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrFloorsComponent } from './pr-floors.component';

describe('PrFloorsComponent', () => {
  let component: PrFloorsComponent;
  let fixture: ComponentFixture<PrFloorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrFloorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrFloorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
