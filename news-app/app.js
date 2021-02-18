const express = require('express');
const app = express();
const cors = require('cors');
const newsRouter = require('./controllers/newsRouter');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname, 'build'));
app.use(newsRouter);

app.get('*', (_req, res) => {
  console.log('Troubleshooting...');
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

module.exports = app;
