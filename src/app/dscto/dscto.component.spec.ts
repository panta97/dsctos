/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DsctoComponent } from './dscto.component';

describe('DsctoComponent', () => {
  let component: DsctoComponent;
  let fixture: ComponentFixture<DsctoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsctoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsctoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
