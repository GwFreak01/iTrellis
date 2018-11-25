import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTableComponent } from './inventory-table.component';
import {MatExpansionModule, MatTableModule} from '@angular/material';
import {CalculatedShipByDatePipe} from '../pipes/calculated-ship-by-date/calculated-ship-by-date.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



describe('InventoryTableComponent', () => {
  let component: InventoryTableComponent;
  let fixture: ComponentFixture<InventoryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatTableModule, MatExpansionModule, BrowserAnimationsModule],
      declarations: [ InventoryTableComponent, CalculatedShipByDatePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
