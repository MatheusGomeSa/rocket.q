const Connection = require('./config');

const initDb = {
    async init() {
        const db = await Connection;
        await db.exec(`CREATE TABLE rooms (id INTEGER PRIMARY KEY, pass TEXT)`);

        await db.exec(`CREATE TABLE questions (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, read INT, room INT)`);

        db.close();
    }
}

initDb.init();

