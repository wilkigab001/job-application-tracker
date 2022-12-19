require("dotenv").config()

const express = require("express")
const cors = require("cors")

const {SERVER_PORT} = process.env
const {User} = require("./models/user")
const {Application} = require("./models/application")

const {isAuthenticated} = require("./middleware/isAuthenticated.js" )
const {login, register} = require('./controllers/auth')
const {addApplication, deleteApplication, editApplication, getApplication} = require("./controllers/applicationController")

const app = express()
const {sequelize} = require('./util/database')

app.use(cors())
app.use(express.json())


User.hasMany(Application)
Application.belongsTo(User)

app.post('/register', register)
app.post('/login', login)

app.post('/adding/:userId', addApplication)
app.get('/applications/:userId', isAuthenticated, getApplication)
app.delete('/application/:id', isAuthenticated, deleteApplication)
app.put('/application/:id', isAuthenticated, editApplication)

sequelize.sync().then(() => {
    app.listen(SERVER_PORT, () => {
      console.log("listening on port " + SERVER_PORT);
    });
  }).catch((err) => console.log(err))
  

