"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const react_1 = __importDefault(require("react"));
const gatsby_1 = require("gatsby");
const react_helmet_1 = __importDefault(require("react-helmet"));
const Layout_1 = require("../components/Layout");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MDXRenderer = require('gatsby-plugin-mdx/mdx-renderer');
const ContentTemplate = ({ data }) => {
    const { mdx: { frontmatter, body }, } = data;
    return (react_1.default.createElement(Layout_1.Layout, null,
        react_1.default.createElement(react_helmet_1.default, { title: `${frontmatter.title}` }),
        react_1.default.createElement("h2", null, frontmatter.title),
        react_1.default.createElement("h3", null, frontmatter.date),
        react_1.default.createElement(MDXRenderer, null, body)));
};
exports.default = ContentTemplate;
exports.query = gatsby_1.graphql `
  query SinglePage($path: String!) {
    mdx(frontmatter: { draft: { ne: true }, path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        path
        title
      }
    }
  }
`;
//# sourceMappingURL=SingleTemplate.js.map