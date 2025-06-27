import express from 'express'

const router=express.Router();
//Rest End Point
//In node express gq server folder we can simultenously we can develope both rest and graph ql end points at the same folder.

router.get('/name', function (req,res,next) {
       res.send('ShivajeeMaharaj ki jai')
} )


export default router;