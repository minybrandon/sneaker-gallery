"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// this is registering a route handler
// Hey, Express app! Please perform the following function when root route is requested!
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server and hello world");
});
app.post("/customers", (req, res) => {
    res.send("Created a new customer");
});
app.get("/customers/:id", (req, res) => {
    res.send("Retrieved customer info");
});
app.post("/customers/:id", (req, res) => {
    res.send("Updated customer info");
});
app.delete("/customers/:id", (req, res) => {
    res.send("Deleted customer");
});
app.get("/customers", (req, res) => {
    res.send("Got all customers info");
});
app.get("/customers/:id/sneakers", (req, res) => {
    res.send("Got sneaker collection from specific customer");
});
app.post("/customers/:id/sneaker", (req, res) => {
    res.send("Added new sneaker to customer's collection");
});
// this is now telling Express app to start listening for requests
// Hey, Express app! I am done with registering my route handlers
// now start listening on the specified port! And call this function when you are now listening
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
