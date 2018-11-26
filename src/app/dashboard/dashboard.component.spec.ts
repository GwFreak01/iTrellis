import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule, MatGridListModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Component, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import moment = require('moment');

@Component({selector: 'app-inventory-table', template: ''})
class MockAppInventoryTableComponent {}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatGridListModule,
        MatCardModule,
        MatDatepickerModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatInputModule,
        MatSelectModule, MatTableModule, FormsModule, BrowserAnimationsModule],
      declarations: [ DashboardComponent, MockAppInventoryTableComponent,  ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default date', function () {
    const dateToTest = new Date();
    expect(component.date).toMatch(dateToTest.toDateString());
  });

  it('should update valid date to new valid input date', function () {
    const dateToTest = '11/23/2018';
    const hostElement = fixture.nativeElement;
    const dateInput: HTMLInputElement = hostElement.querySelector('.dateInput');
    const dateInputField: HTMLInputElement = hostElement.querySelector('.dateInput');

    dateInput.value = dateToTest;
    dateInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    console.log('testdate', dateToTest);
    console.log('input: ', dateInput);
    console.log('inputField: ', dateInputField);
    expect(dateInputField.textContent).toMatch(dateToTest);

  });
});
