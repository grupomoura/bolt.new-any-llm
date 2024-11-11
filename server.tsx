import * as http from "http";
import { createRequestHandler } from "@remix-run/vercel";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const handleRequest = createRequestHandler({
  build: require("./build"),
});

const server = http.createServer(handleRequest);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
} else {
  port = parseInt(port);
}

server.listen(port);
