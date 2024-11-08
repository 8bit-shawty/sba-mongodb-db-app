import express from 'express'
import db from '../db/conn.js'
import { ObjectId } from 'mongodb'

// '/books' BASE PATH
const router = express.Router();

router.get('/', async(req, res, next) => {
    try{
        let collection = db.collection('books');
        const books = await collection.find({}).toArray();
        res.status(200).json(books)
    }catch(err){
        next(err)
    }
})

router.get('/:id', async(req, res, next) => {
    try{
        let collection = db.collection('books');
        const query = {_id: new ObjectId(req.params.id)}
        const result = await collection.findOne(query)
        if(!result) return res.status(404).send("No books found.")
        res.status(200).json(result)
    }catch(err){
        next(err)
    }
})

router.post('/', async(req, res, next) => {
    try{
        let collection = db.collection('books');
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            copiesAvail: req.body.copiesAvail
        }
        const result = await collection.insertOne(newBook)
        res.send(result).status(201)
    }catch(err){
        next(err)
    }
})

router.delete('/:id', async(req, res, next) => {
    try{
        let collection = db.collection('books');

        const query = {_id: new ObjectId(req.params.id)}
        
        const result = await collection.deleteOne(query)
        if(result.deletedCount === 0) return res.status(404).send("No book found.")
        res.send("Book Deleted").status(200)
    }catch(err){
        next(err)
    }
})

export default router