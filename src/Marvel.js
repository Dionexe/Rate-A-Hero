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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMarvelUrl = exports.fetchMarvelData = void 0;
const axios_1 = __importDefault(require("axios"));
const md5_1 = __importDefault(require("md5"));
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const timeStamp = new Date().getTime().toString();
const hash = (0, md5_1.default)(timeStamp + privateKey + publicKey);
const fetchMarvelData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(url);
        return response.data.data.results;
    }
    catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
});
exports.fetchMarvelData = fetchMarvelData;
const generateMarvelUrl = (search) => {
    return search
        ? `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
        : `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;
};
exports.generateMarvelUrl = generateMarvelUrl;
