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
import {Component} from '@angular/core';

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
        MatSelectModule, MatTableModule, FormsModule],
      declarations: [ DashboardComponent, MockAppInventoryTableComponent,  ]
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
});
