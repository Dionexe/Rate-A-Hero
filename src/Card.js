"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const CardComponent = ({ data }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "card-container", children: data.map((character) => ((0, jsx_runtime_1.jsxs)("div", { className: "card", children: [(0, jsx_runtime_1.jsx)("img", { src: `${character.thumbnail.path}.${character.thumbnail.extension}`, alt: character.name }), (0, jsx_runtime_1.jsxs)("div", { className: "card-content", children: [(0, jsx_runtime_1.jsx)("h2", { children: character.name }), (0, jsx_runtime_1.jsx)("p", { children: character.description || 'Description not available.' })] })] }, character.id))) }));
};
exports.CardComponent = CardComponent;
