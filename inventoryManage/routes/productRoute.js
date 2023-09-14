import express from 'express'
import { addItem, deleteItem, updateItem,  specificItem, displayItems } from '../controller/product.js'

const router = express.Router()

router.get('/', displayItems)
router.post('/', addItem)
router.delete('/:id', deleteItem)
router.put('/:id',updateItem)
router.get('/:id',specificItem)

export default router