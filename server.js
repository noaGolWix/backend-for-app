// Importing express module
const express = require('express')

// Getting a server instance from express
const app = express()

// Declering get function
app.get('/', (req, res) => {
    res.send('hellog there')
})

// Starting server on trafic from port
app.listen(3000, () => {
    console.log('server is running on port 3000')
})