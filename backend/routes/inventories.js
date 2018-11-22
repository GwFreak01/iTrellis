const express = require('express');
const router = express.Router();
const InventoryController = require('../controllers/inventories');

router.post('', InventoryController.createInventory);

router.get('', InventoryController.getInventories);

router.post('/:id', InventoryController.updateInventory);

router.delete('/:id', InventoryController.deleteInventory);
