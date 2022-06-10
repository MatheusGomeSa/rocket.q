const express = require('express');
const questionController = require('./controllers/QuestionController')
const roomController = require('./controllers/RoomController')
const homeController = require('./controllers/HomeController')

const route = express.Router();

route.get('/', homeController.home);

/* rooms */
route.get('/room/:room', roomController.open);
route.get('/create-pass', homeController.createPass);
route.post('/create-room', roomController.create);
route.post('/enterroom', roomController.enter)


/* Questions */
route.post('/question/:room/:question/:action', questionController.index);
route.post('/question/create/:room', questionController.create)


module.exports = route;