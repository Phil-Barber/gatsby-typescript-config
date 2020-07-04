"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("@testing-library/jest-dom/extend-expect");
const react_2 = require("@testing-library/react");
const index_1 = require("../../src/pages/index");
describe('IndexPage', () => {
    it('renders correctly', () => {
        const { getByText } = react_2.render(react_1.default.createElement(index_1.IndexPage, null));
        expect(getByText('Go to another page')).toHaveAttribute('href', '/another-page/');
        expect(getByText('See content generated from Markdown files')).toHaveAttribute('href', '/all/');
    });
});
//# sourceMappingURL=index.spec.js.map