import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';

import { PayBillsPage } from './pay-bills';

describe('PayBillsPage', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PayBillsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the tabs page', () => {
    const fixture = TestBed.createComponent(PayBillsPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
