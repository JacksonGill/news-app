import React, {useEffect, useState} from "../_snowpack/pkg/react.js";
import FoxView from "./components/FoxView.js";
import CnnView from "./components/CnnView.js";
import newsService from "./services/newsService.js";
function App() {
  const selectedStyle = "isSelected";
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [selected, setSelected] = useState("Top Headlines");
  useEffect(() => {
    newsService.retrieveAllNews().then((news2) => setNews(news2));
  }, []);
  useEffect(() => {
    setFilteredNews(news);
  }, [news]);
  useEffect(() => {
    if (selected === "Biden") {
      setFilteredNews(news.filter((n) => n.title.indexOf("Biden") !== -1));
    } else if (selected === "Trump") {
      setFilteredNews(news.filter((n) => n.title.indexOf("Trump") !== -1));
    } else if (selected === "Top Headlines") {
      setFilteredNews(news);
    }
  }, [selected]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("h1", null, "Fox News vs. CNN"), /* @__PURE__ */ React.createElement("nav", null, selected === "Trump" ? /* @__PURE__ */ React.createElement("a", {
    className: selectedStyle
  }, "Trump") : /* @__PURE__ */ React.createElement("a", {
    onClick: () => setSelected("Trump")
  }, "Trump"), selected === "Biden" ? /* @__PURE__ */ React.createElement("a", {
    className: selectedStyle
  }, "Biden") : /* @__PURE__ */ React.createElement("a", {
    onClick: () => setSelected("Biden")
  }, "Biden"), selected === "Top Headlines" ? /* @__PURE__ */ React.createElement("a", {
    className: selectedStyle
  }, "Top Headlines") : /* @__PURE__ */ React.createElement("a", {
    onClick: () => setSelected("Top Headlines")
  }, "Top Headlines"))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(FoxView, {
    selected,
    news: filteredNews.filter((n) => n.source.id === "fox-news")
  }), /* @__PURE__ */ React.createElement(CnnView, {
    selected,
    news: filteredNews.filter((n) => n.source.id === "cnn")
  })));
}
export default App;
