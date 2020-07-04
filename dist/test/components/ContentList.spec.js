"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const react_1 = __importDefault(require("react"));
const ramda_1 = require("ramda");
const react_2 = require("@testing-library/react");
const ContentList_1 = require("../../src/components/ContentList");
function createEdge(override) {
    return {
        node: ramda_1.merge({
            frontmatter: {
                path: '',
                title: '',
            },
        }, override),
    };
}
describe('<ContentList />', () => {
    it('renders a list of content links', () => {
        const edges = [
            createEdge({
                frontmatter: { path: '/path/1', title: 'Content 1' },
            }),
            createEdge({
                frontmatter: { path: '/path/2', title: 'Content 2' },
            }),
        ];
        const { getByText } = react_2.render(react_1.default.createElement(ContentList_1.ContentList, { edges: edges }));
        expect(['Content 1', 'Content 2'].map((text) => getByText(text).closest('a').getAttribute('href'))).toEqual(['/path/1', '/path/2']);
    });
});
//# sourceMappingURL=ContentList.spec.js.map