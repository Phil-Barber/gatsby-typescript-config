"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentList = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@emotion/core");
const gatsby_1 = require("gatsby");
const list = core_1.css `
  line-height: 1.8;
  list-style: none;
  padding: 0;
  margin: 1rem 0 2rem;
`;
const item = core_1.css ``;
exports.ContentList = ({ edges }) => (react_1.default.createElement("ul", { css: list }, edges.map(({ node }) => {
    const { path, title } = node.frontmatter;
    return (react_1.default.createElement("li", { css: item, key: path },
        react_1.default.createElement(gatsby_1.Link, { to: path }, title),
        " (",
        node.frontmatter.date,
        ")"));
})));
//# sourceMappingURL=ContentList.js.map