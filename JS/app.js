// import express module and open a port
const express = require('express');
const app = express();
const port = null; 

const db = require('./db');

app.get('/', (req, res) => {
  // perform database query and send results to the client
  db.query('SELECT * FROM your_table', (err, results) => {
    if (err) {
      console.error('Error querying the database: ' + err.stack);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(`<pre>${JSON.stringify(results, null, 2)}</pre>`);
  });
});

// outputs what port the server is running on
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});