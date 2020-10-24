require('dotenv').config();

const express = require('express');
const { use } = require('passport');
const router = require('./router/main');
const app = express();
const fetch = require('node-fetch');
const bodyParer = require('body-parser');

const apiHeartBeat = require('./router/apiHeartbeat');
const booksRouter = require('./router/apiBooks');
const routerMain = require('./router/main');

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/', express.static(__dirname + '/public'));
app.use(bodyParer.json());

// API Routing
app.use('/', routerMain);
app.use('/router/apiHeartBeat', apiHeartBeat);
app.use('/router/apiBooks', booksRouter);

app.listen(3001, () => {
  console.log('Hello humans, server is running');
});
