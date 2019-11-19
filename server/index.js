const oracledb = require('oracledb');

async function connect() {
    try {
        const connection = oracledb.getConnection({
            user: 'cscass',
            password: '08311516',
            connectString: 'oracle.scs.ryerson.ca:1521/orcl'
        });
        const result = await connection.execute(
            `SELECT *
             FROM restaurant`  // bind value for :id
        );
        console.log(connection);
        console.log(result);
    } catch(e) {
        console.log('ERROR');
        console.log(e);
    }
}

connect();