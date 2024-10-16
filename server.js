const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// database connection.
const db = mysql.createConnection({
 host : process.env.DB_HOST,
 user: process.env.DB_USERNAME,
 password: process.env.DB_PASSWORD,
 database : process.env.DB_NAME

});

// connect to the database.

db.connect(err =>{
    if (err) {
        console.error('Database connection failed' + err.stack);
        return;
    }
    console.log('connected to the database.');
});

// Question 1 goes here
app.get('/patients', (req, res)=>{
    db.query('SELECT patient_id, first_name, last_name, date_of_birth FROM patients', (err, results) => {
        if (err){
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// Question 2 goes here
app.get('/providers', (req,res) => {
    db.query('SELECT first_name, last_name, provider_specialty FROM providers', (err, results) => {
        if(err){
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// Question 3 goes here


// Question 4 goes here



// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})