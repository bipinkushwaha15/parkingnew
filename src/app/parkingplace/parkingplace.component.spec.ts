import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingplaceComponent } from './parkingplace.component';

describe('ParkingplaceComponent', () => {
  let component: ParkingplaceComponent;
  let fixture: ComponentFixture<ParkingplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
