const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('connected');
  res.send('connected');
});

app.listen(5000, () => {
  console.log('listening to port 5000');
});
