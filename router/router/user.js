const express = require('express');
const router = express.Router()

router.get('/1.html',(req,res)=>{
	res.send('用户页面1')
})
router.get('/2.html',(req,res)=>{
	res.send('用户页面2')
})

module.exports = router;