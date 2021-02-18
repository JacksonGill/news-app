import React from "../../_snowpack/pkg/react.js";
const NewsInfo = ({id, img, date, newsNetwork}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: `news-${id}-info`
  }, id === 1 ? /* @__PURE__ */ React.createElement("img", {
    className: `news-icon news-icon-${id}`,
    src: img
  }) : "", /* @__PURE__ */ React.createElement("div", {
    className: `logo-info-${id}`
  }, /* @__PURE__ */ React.createElement("p", null, date), /* @__PURE__ */ React.createElement("p", null, newsNetwork)), id === 2 ? /* @__PURE__ */ React.createElement("img", {
    className: `news-icon news-icon-${id}`,
    src: img
  }) : "");
};
export default NewsInfo;
