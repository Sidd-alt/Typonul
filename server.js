const express = require('express'); 
const cors = require('cors');
const knex = require('knex');
const { response } = require('express');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const performance = require('./controllers/performance')
const history = require('./controllers/history')

const database = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'postgres',
      database : 'typee'
    }
  });


const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Working')
// })

app.post('/signin', (req, res) => {signin.handleSignin(req, res, database, bcrypt)})
app.post('/register', (req, res) => {register.handleRegister(req, res, database, bcrypt, saltRounds)})
app.post('/performance', (req, res) => {performance.handlePerformance(req, res, database)})
app.post('/history', (req, res) =>  {history.handleHistory(req, res, database)})

app.listen(process.env.PORT || 3000, ()=> {
    console.log('app is running on port', process.env.PORT);
})


// --> res = this is working
// signin --> POST = success/ finally
// register --> POST = user 