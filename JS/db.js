// import mysql module
const mysql = require('mysql');

// create a mySQL database connection
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "users"
});

// attempt to connect to mySQL database
connection.connect((err) => {
    if (err) {
        console.error("Database could not connect" + err.stack);
        return;
    }
    console.log("Successfully Connected")
});

// export the connection object
module.exports = connection;