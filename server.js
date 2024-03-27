// Importing express module
const express = require('express')
const cors = require('cors')

// Getting a server instance from express
const app = express()

// Handeling cors
app.use(cors())

// Declering get function
app.get('/', (req, res) => {
    res.send('hellog there')
})

// Starting server on trafic from port
app.listen(process.env.PORT || 3000, () => {
    console.log('server is running on port 3000')
})