const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const { readdirSync } = require("fs");
const http = require("http");
const dotEnv = require("dotenv");
const path = require("path");

const { errorHandler } = require("./backend/middlewares/errorMiddlewares");
const {
  initIo,
  getIo,
  addUser,
  removeUser,
  sendMessage,
  initializeMessages,
  initializeChat,
} = require("./backend/realtimeFeatures/socket");
const { systemInfo } = require("./backend/controllers/systemInfo");

dotEnv.config();
const env = process.env.NODE_ENV || "dev";
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = initIo(server);

app.use(express.json());
app.use(cors());
app.use(morgan(env));

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.static(path.join(__dirname, "/frontend/build")));

readdirSync("./backend/routes").map((route) => {
  app.use("/api", require(`./backend/routes/${route}`));
});

app.get("/system", systemInfo);

app.get("*", (req, res) => {
  console.log(path.join(__dirname, "/frontend/build", "index.html"));
  console.log(readdirSync(path.join(__dirname, "/frontend/build")));
  res.sendFile(path.join(__dirname, "/frontend/build", "index.html"));
});

app.use(errorHandler);

const dbSuccess = () => {
  server.listen(PORT, (error) => {
    if (error) throw error;
    console.log("Server runs on", PORT);
    console.log(readdirSync(path.join(__dirname, "/frontend/build")));
  });

  io.on("connection", (socket) => {
    console.log("User connected", socket.id);
    socket.on("USER_JOINED", ({ userId }) =>
      addUser({ id: socket.id, userId })
    );
    socket.on("LEAVE_USER", removeUser);
    socket.on("SEND_MESSAGE", sendMessage);
    socket.on("INITIALIZE_MESSAGES", initializeMessages);
    socket.on("INITIALIZE_CHAT", initializeChat);
  });
};

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // userFindAndModify: false,
    // useCreateIndex: true,
  })
  .then(dbSuccess)
  .catch((error) => {});
