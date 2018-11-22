export interface InventoryModel {
  _id: string;
  productId: string;
  productName: string;
  inventoryQuantity: number;
  shipOnWeekends: boolean;
  maxBusinessDaysToShip: number;
}
