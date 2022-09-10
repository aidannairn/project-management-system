const express = require('express')
const colors = require('colors')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')

const connectDB = require('./config/db')
const schema = require('./schema/schema')

const port = process.env.PORT || 4000

// Connect to database
connectDB()

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on port ${port}`))