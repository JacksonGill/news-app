const express = require('express');
const app = express();
const cors = require('cors');
const newsRouter = require('./controllers/newsRouter');

app.use(cors());
app.use(express.json());
app.use(express.static('build'));
app.use(newsRouter);

app.get('/', (_request, response) => {
  response.sendFile(__dirname, '/build/index.html');
});

module.exports = app;
