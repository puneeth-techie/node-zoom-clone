import app from "./startup/app.js";
import http from "http";
import * as io from "socket.io";

const server = http.createServer(app);
const port = process.env.PORT || 5000;
const socketio = new io.Server(server);

//socket.io
socketio.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("user-connected", userId);

    socket.on("disconnect", () => {
      socket.broadcast.to(roomId).emit("user-disconnected", userId);
    });
  });
});

//init server
server.listen(port, () => {
  console.log(`Server started listening at ${port}`);
});
