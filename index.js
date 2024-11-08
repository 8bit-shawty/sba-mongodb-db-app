import express from 'express'
import 'dotenv/config'
import bookRoutes from './routes/books.js'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

//test db connection
import "./db/conn.js"


app.get('/', (req, res) => {
    res.send('Welcome to the library')
})

//ROUTES
app.use('/books', bookRoutes)

//GLOBAL ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...")
})

//START THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})