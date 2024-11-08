import express from 'express'
import { ObjectId } from 'mongodb'
import db from '../db/conn.js'

// '/users' BASE PATH
const router = express.Router();

router.get('/', async(req, res, next) => {
    try{
        let collection = db.collection('users');
        const users = await collection.find({}).toArray();
        res.status(200).json(users)
    }catch(err){
        next(err)
    }
})

router.get('/:id', async(req, res, next) => {
    try{
        let collection = db.collection('users');
        const query = {_id: new ObjectId(req.params.id)}
        const result = await collection.findOne(query)
        if(!result) return res.status(404).send("No users found.")
        res.status(200).json(result)
    }catch(err){
        next(err)
    }
})

router.post('/', async(req, res, next) => {
    try{
        let collection = db.collection('users');
        const newUser = {
            name: req.body.name,
            email: req.body.email
        }
        const result = await collection.insertOne(newUser)
        res.send(result).status(201)
    }catch(err){
        next(err)
    }
})

router.patch('/:id', async(req, res, next) => {
    try{
        let collection = db.collection('users');
        const query = {_id: new ObjectId(req.params.id)}
        const update = {
            $set: req.body
        }
        const result = await collection.updateOne(query, update);
        if(!result) return res.status(404).send("User not found.")
        res.send("User updated successfully").status(200)
    }catch(err){
        next(err)
    }
})

export default router