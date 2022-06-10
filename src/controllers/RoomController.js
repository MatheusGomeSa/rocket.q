const Connection = require('../db/config');

function gerarId() {
    let id;
    for (var i = 0; i < 6; i++) {
        i == 0 ? id = Math.floor(Math.random() * 10).toString() :
            id += Math.floor(Math.random() * 10).toString();
    }
    return id;
}

module.exports = {
    async create(req, res) {
        const db = await Connection;
        const pass = req.body.password;
        let roomId = gerarId();

        const roomsIsExist = await db.all(`SELECT id FROM rooms WHERE id = ${roomId}`);

        if (roomsIsExist.length > 0) {
            roomId = gerarId();
        }

        // Insere sala no no banco de dados 
        await db.run(`INSERT INTO rooms (
            id, pass ) VALUES ( 
                ${parseInt(roomId)}, ${pass}
            )`)

        res.redirect(`/room/${roomId}`);
    },
    async open(req, res) {
        const db = await Connection;
        const roomId = req.params.room;

        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)

        let isQuestions = true;
        if (questions.length == 0 && questionsRead.length == 0) {
            isQuestions = false;
        }

        const error = req.query.error;

        if (error) {
            res.render("room", { roomId: roomId, questions: questions, questionsRead: questionsRead, isQuestions: isQuestions, error: true });
        } else {
            res.render("room", { roomId: roomId, questions: questions, questionsRead: questionsRead, isQuestions: isQuestions, error: false });
        }
    },
    async enter(req, res) {
        const db = await Connection;
        const roomId = req.body.roomId;

        const roomExists = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`);

        if (roomExists) {
            res.redirect(`/room/${roomId}`);
        } else {
            res.redirect('/?error=true',)
        }
    }
}