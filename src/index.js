const express = require("express");
const path = require("path");

const app = express();

app.get("/*", (_, res) => {
  res.sendFile(path.resolve("src", "pages", "index.html"));
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server running...");
});
