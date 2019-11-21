const oracledb = require('oracledb');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

async function runSql(sql) {
    let result;
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: 'cscass',
            password: '08311516',
            connectString: '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=oracle.scs.ryerson.ca)(Port=1521))(CONNECT_DATA=(SID=orcl)))'
        });
        result = await connection.execute(sql);
    } catch(e) {
        console.log(e);
    } finally {
        if (connection) {
          try {
            await connection.close();
          } catch (err) {
            console.error(err);
          }
        }
      }
      return result;
}


app.get('/restaurants', (req, res) => {
    const result = runSql(`
        SELECT * FROM RESTAURANT
    `);
    result.then((data) => {
        let listData = [];
        data.rows.forEach((row) => {
            listData.push({
                id: row[0],
                title: row[2]
            })
        });
        res.send(listData);
    });
});

app.listen(8080);
