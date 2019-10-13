import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingDetailPage } from './shipping-detail.page';

describe('ShippingDetailPage', () => {
  let component: ShippingDetailPage;
  let fixture: ComponentFixture<ShippingDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
