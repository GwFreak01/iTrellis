import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {MatDatepickerInputEvent} from '@angular/material';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  date = new Date();
  invalidDate = false;
  dateField = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

  setSelectedDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.date = moment(event.target.value).toDate();
    this.invalidDate = moment(this.date).isValid();
  }

  getErrorMessage() {
    return 'INVALID DATE INPUTTED';
  }
}
