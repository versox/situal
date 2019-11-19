const oracledb = require('oracledb');

async function runSql(sql) {
    try {
        const connection = oracledb.getConnection({
            user: 'cscass',
            password: '08311516',
            connectString: 'oracle.scs.ryerson.ca:1521/orcl'
        });
        const result = await connection.execute(sql);
        return result;
    } catch(e) {
        console.log(e);
    }
}

exports.runSql = runSql;