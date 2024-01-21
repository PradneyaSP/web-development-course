import express, { Express, Request, Response } from "express";
const port = 8081;

const app = express();

app.get("/", (req, res) => {
  res.send("Backend Here!");
});

app.get("/about" , (req,res) => {
    res.send("About Page!");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
