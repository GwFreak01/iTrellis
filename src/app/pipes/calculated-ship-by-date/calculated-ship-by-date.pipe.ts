import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'calculatedShipByDate'
})
export class CalculatedShipByDatePipe implements PipeTransform {
  private currentDate;
  private endDate;
  private count;

  transform(maxBusinessDaysToShip: number, shipOnWeekends: boolean, date: Date): any {
    this.count = 0;
    this.currentDate = moment(date);
    this.endDate = this.currentDate;
    if (shipOnWeekends) {
      return (this.endDate.add(maxBusinessDaysToShip - 1, 'd').format('ddd MMM Do'));
    }
    else {
      while (this.count <= maxBusinessDaysToShip - 1) {
        if (this.endDate.day() !== (0 || 6)) {
          this.count += 1;
          this.endDate = this.endDate.add(1, 'd');
        }
        else {
          this.endDate = this.endDate.add(1, 'd');

        }
      }
      return this.endDate.format('ddd MMM Do');
    }
  }
}
