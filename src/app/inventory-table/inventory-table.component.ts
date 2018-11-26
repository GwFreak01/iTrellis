import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as moment from 'moment';

export interface InventoryElement {
  _id: string;
  productId: string;
  productName: string;
  inventoryQuantity: number;
  shipOnWeekends: boolean;
  maxBusinessDaysToShip: number;
}

const inventoryList = [
  {
    'productId': 1,
    'productName': 'fugiat exercitation adipisicing',
    'inventoryQuantity': 43,
    'shipOnWeekends': true,
    'maxBusinessDaysToShip': 3
  },
  {
    'productId': 2,
    'productName': 'mollit cupidatat Lorem',
    'inventoryQuantity': 70,
    'shipOnWeekends': true,
    'maxBusinessDaysToShip': 14
  },
  {
    'productId': 3,
    'productName': 'non quis sint',
    'inventoryQuantity': 33,
    'shipOnWeekends': false,
    'maxBusinessDaysToShip': 15
  },
  {
    'productId': 4,
    'productName': 'voluptate cupidatat non',
    'inventoryQuantity': 52,
    'shipOnWeekends': false,
    'maxBusinessDaysToShip': 18
  },
  {
    'productId': 5,
    'productName': 'anim amet occaecat',
    'inventoryQuantity': 39,
    'shipOnWeekends': true,
    'maxBusinessDaysToShip': 19
  },
  {
    'productId': 6,
    'productName': 'cillum deserunt elit',
    'inventoryQuantity': 47,
    'shipOnWeekends': false,
    'maxBusinessDaysToShip': 20
  },
  {
    'productId': 7,
    'productName': 'adipisicing reprehenderit et',
    'inventoryQuantity': 71,
    'shipOnWeekends': false,
    'maxBusinessDaysToShip': 15
  },
  {
    'productId': 8,
    'productName': 'ex mollit laboris',
    'inventoryQuantity': 80,
    'shipOnWeekends': false,
    'maxBusinessDaysToShip': 5
  }
];

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
  displayedColumns: string[] = ['productName', 'inventoryQuantity', 'maxBusinessDaysToShip'];
  dataSource = inventoryList;
  expandedProduct;
  @Input()
  date;

  constructor() { }

  ngOnInit() {
    window.localStorage.setItem('db', JSON.stringify(inventoryList));
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.date = moment(changes.date.currentValue);
  }



}
