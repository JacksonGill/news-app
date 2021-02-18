import React, {useEffect, useState} from "../../_snowpack/pkg/react.js";
import NewsInfo from "./NewsInfo.js";
const CnnView = ({news, selected}) => {
  const [currentArticle, setCurrentArticle] = useState([]);
  const [counter, setCounter] = useState(0);
  let cnnNews = news.filter((n) => n.content !== null);
  useEffect(() => {
    if (news.length === 0) {
      return null;
    }
    if (cnnNews.length === 0) {
      setCurrentArticle(news[0]);
    } else {
      setCurrentArticle(cnnNews[0]);
    }
    setCounter(0);
  }, [news]);
  useEffect(() => {
    if (cnnNews.length === 0) {
      return null;
    }
    setCurrentArticle(cnnNews[counter]);
  }, [counter]);
  if (news.length === 0) {
    return /* @__PURE__ */ React.createElement("section", {
      className: "news-2"
    }, /* @__PURE__ */ React.createElement(NewsInfo, {
      id: 2,
      img: "/images/cnn.png",
      date: "",
      newsNetwork: "CNN News"
    }), /* @__PURE__ */ React.createElement("div", {
      className: "title"
    }, /* @__PURE__ */ React.createElement("h2", null, `Sorry no ${selected} news today`)), /* @__PURE__ */ React.createElement("div", {
      className: "content"
    }, /* @__PURE__ */ React.createElement("p", null, `No ${selected === "Trump" ? "bad" : "good"} news about ${selected}, that's a suprise...`)));
  }
  const handleChange = () => {
    if (cnnNews.length === counter + 1) {
      setCounter(0);
      return null;
    }
    setCounter(counter + 1);
  };
  if (currentArticle.length !== 0) {
    return /* @__PURE__ */ React.createElement("section", {
      className: "news-2"
    }, /* @__PURE__ */ React.createElement(NewsInfo, {
      id: 2,
      img: "/images/cnn.png",
      date: currentArticle.publishedAt.toString().substring(0, 10),
      newsNetwork: "CNN News"
    }), /* @__PURE__ */ React.createElement("button", {
      onClick: handleChange,
      className: "new-article-btn"
    }, "New Article"), /* @__PURE__ */ React.createElement("div", {
      className: "title"
    }, /* @__PURE__ */ React.createElement("h2", null, currentArticle.title)), /* @__PURE__ */ React.createElement("div", {
      className: "content"
    }, /* @__PURE__ */ React.createElement("p", null, currentArticle.content === null ? currentArticle.description : currentArticle.content.substring(0, 200))), /* @__PURE__ */ React.createElement("a", {
      className: "external-link",
      href: currentArticle.url,
      target: "_blank"
    }, /* @__PURE__ */ React.createElement("span", null, "Read"), " Story..."), /* @__PURE__ */ React.createElement("img", {
      className: "img-article",
      src: currentArticle.urlToImage
    }));
  } else {
    return /* @__PURE__ */ React.createElement("div", null, "loading...");
  }
};
export default CnnView;
