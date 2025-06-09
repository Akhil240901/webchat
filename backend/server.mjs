import express from "express";
import chats from "./data/dummyData.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send("Home is ready.");
});
app.get("/chats", (req, res) => {
  res.send(chats);
});
const port = 5000;
app.listen(port, console.log("Server is running at port number 500"));
