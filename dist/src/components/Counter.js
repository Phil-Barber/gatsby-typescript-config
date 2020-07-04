"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
const react_1 = __importStar(require("react"));
const styled_1 = __importDefault(require("@emotion/styled"));
const Wrapper = styled_1.default('div') `
  margin: 1rem 0;
  text-align: center;
`;
const Button = styled_1.default('button') `
  padding: 1rem 2rem;
`;
const Count = styled_1.default('span') `
  padding: 1rem 2rem;
`;
exports.Counter = () => {
    const [count, setCount] = react_1.useState(0);
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(Button, { onClick: () => setCount(count - 1) }, "-"),
        react_1.default.createElement(Count, null, count),
        react_1.default.createElement(Button, { onClick: () => setCount(count + 1) }, "+")));
};
//# sourceMappingURL=Counter.js.map