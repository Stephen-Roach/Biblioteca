const express = require('express');
const { use } = require('passport');
const router = require('./router/main');
const routerMain = require('./router/main');

const app = express();

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/', express.static(__dirname + '/public'));

// API Routing
app.use('/', routerMain);

app.get('/heartbeat', (req, res) => {
  res.json({
    is: 'working',
  });
});

app.listen(3001, () => {
  console.log('Hello humans, server is running');
});
