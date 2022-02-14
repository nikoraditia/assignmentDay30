const express = require('express')
const storeRoute = require('../controller/controller')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
})

router.get('/store/inventory', storeRoute.listStore)
router.post('/store/order', storeRoute.insertStore)
router.put('/store/order/:id', storeRoute.updateStore)
router.delete('/store/order/:id', storeRoute.deleteStore)

module.exports = router;