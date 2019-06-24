import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualParking2Component } from './visual-parking2.component';

describe('VisualParking2Component', () => {
  let component: VisualParking2Component;
  let fixture: ComponentFixture<VisualParking2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualParking2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualParking2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
