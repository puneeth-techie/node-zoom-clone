import app from "./startup/app.js";
import http from "http";

const server = http.createServer(app);
const port = process.env.PORT || 5000;

//init server
server.listen(port, () => {
  console.log(`Server started listening at ${port}`);
});
