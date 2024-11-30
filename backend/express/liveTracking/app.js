const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

const http = require("http");
const socketio = require("socket.io");

const server = http.createServer(app);

const io = socketio(server);

io.on("connection", (socket) => {
  socket.on("send-location", (data) => {
    console.log("received-location from client: ", socket.id, " data: ", data);
    io.emit("received-location", {
      id: socket.id,
      ...data,
    });
  });
  socket.on("disconnect", () => {
    io.emit("user-disconnected", socket.id);
  });
  console.log("socket.io connected.");
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => res.render("index"));
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.listen(port);
