const express = require('express');
const app = express();
const cors = require('cors');
const newsRouter = require('./controllers/newsRouter');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static('build'));
app.use(newsRouter);

app.get('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

module.exports = app;
