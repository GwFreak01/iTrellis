import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatedShipByDate'
})
export class CalculatedShipByDatePipe implements PipeTransform {
  private currentDate: Date;
  private endDate: Date;
  private count;

  transform(maxBusinessDaysToShip: number, shipOnWeekends: boolean): any {
    this.count = 0;
    this.currentDate = new Date();
    this.endDate = this.currentDate;
    if (shipOnWeekends) {

      return (this.currentDate.getDate() + maxBusinessDaysToShip);
    }

    // while (this.count !== maxBusinessDaysToShip) {
    //   if (this.endDate.getDate() + 1) {
    //   }
    //
    // }
    }


  }
