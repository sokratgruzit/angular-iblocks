import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrFacadeComponent } from './pr-facade.component';

describe('PrFacadeComponent', () => {
  let component: PrFacadeComponent;
  let fixture: ComponentFixture<PrFacadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrFacadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
