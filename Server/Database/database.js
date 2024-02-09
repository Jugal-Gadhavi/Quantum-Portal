const mysql = require("mysql2");
const express = require('express')
var app = express();

const connection = mysql.createConnection({
  host: `localhost`,
  user: `root`,
  password: `Jugal@1234`,
  database: `ZeusSchema`,
});

connection.connect();


module.exports = {
    connection
}

