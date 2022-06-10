const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

// module.exports = (async () => {
//     await open({
//         filename: './src/db/rocketq.sqlite',
//         drive: sqlite3.Database,
//     })
// })

module.exports = (async () => {
    // open the database
    const dbConnection = await open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database
    })
    return dbConnection
})()