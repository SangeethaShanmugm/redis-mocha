import express from "express";
const app = express();
const PORT = 5500;

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(PORT, () => console.log("Server listening on port", PORT));
