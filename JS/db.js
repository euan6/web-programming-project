const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: ""
});

connection.connect((err) => {
    if (err) {
        console.error("Database could not connect" + err.stack);
        return;
    }
    console.log("Successfully Connected")
});

module.exports = connection;