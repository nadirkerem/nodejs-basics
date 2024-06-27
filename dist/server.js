"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const url_1 = __importDefault(require("url"));
const hostname = '127.0.0.1';
const port = 3000;
const server = http_1.default.createServer((req, res) => {
    const parsedUrl = url_1.default.parse(req.url || '', true);
    const pathname = parsedUrl.pathname;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    switch (pathname) {
        case '/':
            res.end('<h1>Hello World!</h1><p>This is the default route.</p>');
            break;
        case '/about':
            res.end('<h1>About Page</h1><p>This page contains information about the application.</p>');
            break;
        case '/hello':
            const name = parsedUrl.query.name || 'stranger';
            res.end(`<h1>Hello, ${name}!</h1><p>Welcome to the hello route.</p>`);
            break;
        case '/data':
            const data = {
                message: 'This is a JSON response',
                timestamp: new Date(),
            };
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
            break;
        default:
            res.statusCode = 404;
            res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
