import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingtimePage } from './shippingtime.page';

describe('ShippingtimePage', () => {
  let component: ShippingtimePage;
  let fixture: ComponentFixture<ShippingtimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingtimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingtimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
