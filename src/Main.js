"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Card_1 = require("./Card");
const Marvel_1 = require("./Marvel");
const Main = () => {
    const [url, setUrl] = (0, react_1.useState)((0, Marvel_1.generateMarvelUrl)());
    const [item, setItem] = (0, react_1.useState)();
    const [search, setSearch] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const results = yield (0, Marvel_1.fetchMarvelData)(url);
                setItem(results);
            }
            catch (error) {
                setItem(undefined);
            }
        });
        fetchData();
    }, [url]);
    const searchMarvel = () => {
        setUrl((0, Marvel_1.generateMarvelUrl)(search));
    };
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchMarvel();
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "header", children: [(0, jsx_runtime_1.jsx)("div", { className: "bg" }), (0, jsx_runtime_1.jsxs)("div", { className: "search-bar", children: [(0, jsx_runtime_1.jsx)("img", { className: "Marvel", src: "/marvel.jpg", alt: "Marvel Logo" }), (0, jsx_runtime_1.jsx)("input", { type: "search", placeholder: "Search Here", className: "search", onChange: handleSearchChange, onKeyDown: handleKeyDown })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "content", children: !item ? (0, jsx_runtime_1.jsx)("p", { className: "Null", children: "Not Found" }) : (0, jsx_runtime_1.jsx)(Card_1.CardComponent, { data: item }) })] }));
};
exports.Main = Main;
