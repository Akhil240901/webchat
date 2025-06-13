import express from "express";
import chats from "./data/dummyData.mjs";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.get("/", (req, res) => {
  res.send("Home is ready.");
});
app.get("/api/chats", (req, res) => {
  res.send(chats);
});
const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is running at port number ${port}`));
