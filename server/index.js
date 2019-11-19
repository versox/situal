const oracledb = require('oracledb');

async function connect() {
    try {
        const connection = oracledb.getConnection({
            user: 'cscass',
            password: '',
            connectString: 'oracle.scs.ryerson.ca:1521/orcl'
        });
        console.log(connection);
    } catch(e) {
        console.log('ERROR');
        console.log(e);
    }
}

connect();