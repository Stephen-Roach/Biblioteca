const express = require('express');

const app = express();

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/', express.static(__dirname + '/public'));

app.get('/heartbeat', (req, res) => {
  res.json({
    is: 'working',
  });
});

app.listen(3000, () => {
  console.log('Hello humans, server is running');
});
