"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Layout_1 = require("../components/Layout");
const NotFoundPage = () => (react_1.default.createElement(Layout_1.Layout, null,
    react_1.default.createElement("h2", null, "Nothing Here"),
    react_1.default.createElement("p", null, "Check that you followed the correct address.")));
exports.default = NotFoundPage;
//# sourceMappingURL=404.js.map