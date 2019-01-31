import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrChessComponent } from './pr-chess.component';

describe('PrChessComponent', () => {
  let component: PrChessComponent;
  let fixture: ComponentFixture<PrChessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrChessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrChessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
