import express from 'express'
import { addItem, deleteItem, updateItem, displayItem } from '../controller/product.js'

const router = express.Router()

router.get('/', displayItem)
router.post('/', addItem)
router.delete('/:id', deleteItem)
router.put('/:id',updateItem)

export default router