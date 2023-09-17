import express from 'express'
import { addItem,  specificItem, displayItems ,searchItem} from '../controller/product.js'

const router = express.Router()

router.get('/', displayItems)
router.post('/', addItem)
router.get('/:id',specificItem)
router.get('/search',searchItem)

export default router