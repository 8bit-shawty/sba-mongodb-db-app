import express from 'express'
import 'dotenv/config'
import bookRoutes from './routes/books.js'
import userRoutes from './routes/users.js'
import checkoutRoutes from './routes/checkouts.js'

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
app.use('/users', userRoutes)
app.use('/checkouts', checkoutRoutes)


//GLOBAL ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...")
})

//START THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})