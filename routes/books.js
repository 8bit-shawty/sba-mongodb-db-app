import express from 'express'
import db from '../db/conn.js'
import { ObjectId } from 'mongodb'

// '/books' BASE PATH
const router = express.Router();

router.get('/all', async(req, res, next) => {
    try{
        let collection = db.collection('books');
        const books = await collection.find({}).toArray();
        res.status(200).json(books)
    }catch(err){
        next(err)
    }
})

export default router