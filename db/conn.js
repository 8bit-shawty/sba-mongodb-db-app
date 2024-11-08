import { MongoClient } from "mongodb";
import "dotenv/config"

const connectionString = process.env.ATLAS_URI || ''
const client = new MongoClient(connectionString)

let conn;
try{
    conn = await client.connect()
    console.log("Connected to Mongo")
}catch(e){
    console.log(err)
}

const db = await conn.db("my_library")
export default db