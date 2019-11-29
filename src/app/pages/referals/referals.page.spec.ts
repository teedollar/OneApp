import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalsPage } from './referals.page';

describe('ReferalsPage', () => {
  let component: ReferalsPage;
  let fixture: ComponentFixture<ReferalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferalsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
