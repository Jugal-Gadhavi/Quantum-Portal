const express = require('express');
const authRoutes = require('./Routes/auth')
const cors = require('cors')


const server = express();
const port  = 9001;


server.use(cors());
server.use(express.json());

const connection =  require('./Database/database').connection;

server.use('/auth',authRoutes);

server.get('/test', (req, res)=>{
    let sql = 'select * from User_Account';

    connection.query(sql, (err, result) =>{
        if(err) console.log(err);
        res.send(result);
    })
})



server.listen(port, ()=> console.log('Running on Port: ' + port))