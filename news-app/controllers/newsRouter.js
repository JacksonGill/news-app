const newsRouter = require('express').Router();
require('dotenv').config();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);

newsRouter.get('/news', (_request, response) => {
  newsapi.v2
    .topHeadlines({
      sources: 'cnn, fox-news',
      language: 'en',
    })
    .then((news) => {
      console.log(news.articles);
      response.send(news.articles);
    });
});

module.exports = newsRouter;
