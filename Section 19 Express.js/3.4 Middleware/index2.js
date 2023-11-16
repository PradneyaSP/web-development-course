import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
//morgan is used to keep log of all the activites on a webapp like status code  , time etc
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
