import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualParkingComponent } from './visual-parking.component';

describe('VisualParkingComponent', () => {
  let component: VisualParkingComponent;
  let fixture: ComponentFixture<VisualParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
