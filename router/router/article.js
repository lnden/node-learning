const express = require('express');
const router = express.Router()

router.get('/1.html',(req,res)=>{
	res.send('文章2')
})
router.get('/2.html',(req,res)=>{
	res.send('文章2')
})

module.exports = router;