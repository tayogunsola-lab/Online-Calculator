import express from "express";
import calculator from "./calculator.js";

const app = express();

app.get("/calc", (req, res) => {
  const { num1, num2, op } = req.query;
});

app.get("/", (req, res) => {
  res.send("Server is running on port 3000");
});

app.listen(3000);
