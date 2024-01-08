const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const { createServer } = require("node:http");

const { User, Notifications, Tienda, Compra } = require("./src/DB_config");

const router = require("./src/routes/routes");

const app = express();
const httpServer = createServer(app);

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  //     CAMBIAR POR LAS URL DE TIENDAS LOCALES
  const allowedOrigins = [
    "http://localhost:5173",
    "https://www.tiendaslocales.com.ar",
  ]; // Lista de URLs permitidas
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  }
  next();
});

app.use(router);

module.exports = httpServer;
