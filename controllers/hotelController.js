var express = require('express');
var router = express.Router();
const {create,list,deleteHotel,UpdateHotel}=require('../services/HotelService')


router.get('/list',list)
router.post('/create',create)
router.delete('/delete/:id',deleteHotel)
router.put('/update/:id',UpdateHotel)
router.get('/search', searchHotelsByRooms);


module.exports = router;