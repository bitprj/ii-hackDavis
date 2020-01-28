const path = require('path')
const express = require('express')
// const hbs = require('hbs')
require('./db/mongoose')
const User = require('./models/user')
const ContactForm = require('./models/contactForm')
const iProfile = require('./models/interpreterProfile')
const userRouter = require('./routers/user')
const contactRouter = require('./routers/contactForm')
const iProfileRouter = require('./routers/interpreterProfile')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(contactRouter)
app.use(iProfileRouter)

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const partialsDirectoryPath = path.join(__dirname, '../templates/partials')
const viewsDirectoryPath = path.join(__dirname, '../templates/views')

// Setup handlebars engine and views locations
// app.set('view engine', 'hbs')
// app.set('views', viewsDirectoryPath)
// hbs.registerPartials(partialsDirectoryPath)

app.use(express.static(publicDirectoryPath))


app.listen(PORT, () => {
    
})

// Note for lab:
// Run npm i express@4.17.1
// Run npm i hbs