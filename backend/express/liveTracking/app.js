const express = require("express");
const app = express();
const port = 3000;

const http = require("http");
const socketio = require("socket.io");

const server = http.createServer(app);

const io = socketio(server);

app.set("view engine", "ej");
app.set(express.static(path.join(__dirname, "public ")));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.listen(port);
