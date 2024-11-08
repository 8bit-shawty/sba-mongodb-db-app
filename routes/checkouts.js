import express from 'express'
import { ObjectId } from 'mongodb'
import db from '../db/conn.js'

// '/checkouts' BASE PATH
const router = express.Router();

router.get('/', async(req, res, next) => {
    try{
        let collection = db.collection('checkouts');
        const checkouts = await collection.find({}).toArray();
        res.status(200).json(checkouts)
    }catch(err){
        next(err)
    }
})

export default router