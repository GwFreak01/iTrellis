import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as moment from 'moment';
import {InventoriesService} from '../services/inventories.service';

export interface InventoryElement {
  _id: string;
  productId: string;
  productName: string;
  inventoryQuantity: number;
  shipOnWeekends: boolean;
  maxBusinessDaysToShip: number;
}

// Can use InventoryService here to
// subscribe to any new inventoryList updates
@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class InventoryTableComponent implements OnInit, OnChanges {
  private inventoryList;
  dataSource;
  displayedColumns: string[] = ['productName', 'inventoryQuantity', 'maxBusinessDaysToShip'];
  expandedProduct;
  @Input()
  date;

  constructor(private inventoriesService: InventoriesService) { }

  ngOnInit() {
    this.inventoryList = this.inventoriesService.getInventories();
    this.dataSource = this.inventoryList;
    window.localStorage.setItem('db', JSON.stringify(this.inventoryList));
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.date = moment(changes.date.currentValue);
  }



}
