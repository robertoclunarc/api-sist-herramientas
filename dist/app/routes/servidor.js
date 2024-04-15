"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servidor = void 0;
const express_1 = __importDefault(require("express"));
class Servidor {
    constructor() {
        this.servidor = (0, express_1.default)();
    }
    listen() {
        this.servidor.listen(console.log('Server on port', 3000));
    }
}
exports.Servidor = Servidor;
const servidor = new Servidor();
servidor.listen();
//# sourceMappingURL=servidor.js.map