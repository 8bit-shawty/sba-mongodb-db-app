import express from 'express'
import { ObjectId } from 'mongodb'
import db from '../db/conn.js'

// '/checkouts' BASE PATH
const router = express.Router();