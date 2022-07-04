import express from "express";

const app = express();

app.listen(3306, () => {
  console.log("Server running on port 3306");
});
