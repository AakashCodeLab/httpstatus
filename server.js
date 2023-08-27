const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const user = require('./controllers/user');
const errorHandler = require('./errorHnadler');
app.use(cors())
app.use(express.json())
app.get('/user', user.getuser);
app.get('/getDetails', user.getDetails);
app.post('/login', user.login);
app.use(errorHandler);



app.get('/',(req, res)=>{
    app.use(express.static(path.resolve(__dirname, 'public')))
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
app.listen(3000, ()=>{
    console.log('connected to server port 3000')
})
