"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const gatsby_1 = require("gatsby");
const Layout_1 = require("../components/Layout");
const SecondPage = () => (react_1.default.createElement(Layout_1.Layout, null,
    react_1.default.createElement("h2", null, "Hi from the second page"),
    react_1.default.createElement("p", null, "Welcome to page 2"),
    react_1.default.createElement(gatsby_1.Link, { to: "/" }, "Go back to the homepage")));
exports.default = SecondPage;
//# sourceMappingURL=another-page.js.map