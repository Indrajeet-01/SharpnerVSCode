import express from 'express'
import { addItem, displayItems ,searchItem} from '../controller/product.js'

const router = express.Router()

router.get('/', displayItems)
router.post('/', addItem)
router.get('/search/:name',searchItem)

export default router