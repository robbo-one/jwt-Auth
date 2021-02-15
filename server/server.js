const path = require("path");
const express = require("express");

const fruitRoutes = require("./routes/fruits");

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, "public")));

server.use("/api/v1/fruits", fruitRoutes);
server.use("/api/v1/auth", authRoutes);

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

module.exports = server;
