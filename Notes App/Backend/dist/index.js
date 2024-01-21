"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 8081;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Backend Here!");
});
app.get("/about", (req, res) => {
    res.send("About Page!");
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
