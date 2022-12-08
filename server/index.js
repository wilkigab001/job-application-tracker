require("dotenv").config()
const express = require("express")
const cors = require("cors")

const {SERVER_PORT} = process.env

const {isAuthenticated} = require("./middleware/isAuthenticated.js" )
const {login, register} = require('./controllers/auth')

const app = express()
const {sequelize} = require('./util/database')

app.use(cors())
app.use(express.json())
