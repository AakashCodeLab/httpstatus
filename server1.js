const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const users = [{
    id: 1, name: 'abc',
},
{
    id: 2, name: 'cdf'
}]
app.use(cors())
app.use(express.json());

app.get('/user', (req, res, next) => {
    res.status(200).json({ sucess: true, data: users });
});

app.post('/addUser', (req, res, next) => {
    users.push({ id: 3, name: 'test' })
    res.status(201).json({ sucess: true, data: users });
});

app.get('/', (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'public')))
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
app.listen(3000, () => {
    console.log('connected to server port 3000')
})
