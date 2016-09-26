'use strict'

const express = require('express')
const { json } = require('body-parser')

//initialize express into app
const app = express()

const PORT = process.env.PORT || 3000
app.set('PORT', PORT)

//middlewares
app.use(express.static('client'))
app.use(json())

app.get('/api/title', (req, res) => 
	res.json({title: 'To Do App'})
)

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`)
})
