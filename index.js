import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 Jenkins + Docker + Webhook Demo Successfully done, amazin job Priyeshs");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
