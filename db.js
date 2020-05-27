module.exports = (sql, params = null) => {
    // 链接数据库
    const mysql = require('mysql');
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'bigevent'
    })
    conn.connect();
    return new Promise((resolve, reject) => {
        conn.query(sql, params, (err, result) => {
            err ? reject(err) : resolve(result);
        })
        conn.end();
    }).catch(err => {
        // 显示错误
        console.log(err.message)
    })
}
