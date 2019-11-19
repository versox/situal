const runSql = require('./sql');
const oracledb = require('oracledb');
const express = require('express');

const app = express();

app.get('/restaurants', (req, res) => {
    const result = runSql(`
        SELECT * FROM RESTAURANT
    `);
    res.send(result);
});

app.listen(8080);
