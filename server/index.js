const oracledb = require('oracledb');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

async function runSql(sql, params) {
    let result;
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: 'cscass',
            password: '08311516',
            connectString: '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=oracle.scs.ryerson.ca)(Port=1521))(CONNECT_DATA=(SID=orcl)))'
        });
        if (params === undefined) {
            result = await connection.execute(sql);
        } else {
            result = await connection.execute(sql, params);
        }
        
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

/*
    Sends data back based on SQL
        Result: an sql promise
        Response: express response object,
        Translate(): function that will convert headers to names accepted by client
*/
function sendData(result, response, translate) {
    result.then((data) => {
        let fData = [];
        data.rows.forEach((row) => {
            const fRow = {};
            data.metaData.forEach((header, index) => {
                const fHeader = translate(header.name);
                fRow[fHeader] = row[index];
            });
            fData.push(fRow);
        });
        response.send(fData);
    });
}

app.get('/restaurants', (req, res) => {
    const result = runSql(`SELECT * FROM RESTAURANT`);
    sendData(result, res, (header) => {
        if (header === 'REST_ID') {
            return 'id';
        }
        if (header === 'REST_NAME') {
            return 'title';
        }
        if (header === 'IMAGE_URL') {
            return 'img';
        }
        return header;
    });
});

app.get('/menus', (req, res) => {
    const rest_id = req.query.id;
    const result = runSql(`SELECT * FROM MENU WHERE REST_ID = :rest_id`, [rest_id])
    sendData(result, res, (header) => {
        if (header === 'MENU_ID') {
            return 'id';
        }
        if (header === 'TITLE') {
            return 'title';
        }
        if (header === 'IMAGE_URL') {
            return 'img';
        }
        return header;
    });
});

app.get('/food', (req, res) => {
    const menu_id = req.query.id;
    const result = runSql(`SELECT * FROM FOOD WHERE MENU_ID = :menu_id`, [menu_id]);
    sendData(result, res, (header) => {
        if (header === 'FOOD_ID') {
            return 'id';
        }
        if (header === 'FOOD_NAME') {
            return 'title';
        }
        if (header === 'FOOD_PRICE') {
            return 'price';
        }
        return header;
    });
})

app.listen(8080);