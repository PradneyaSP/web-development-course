import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

function getDay() {
  return new Date().getDay();
}

app.get("/", (req, res) => {
  const date = new Date();
  const day = date.getDay();

  if (day != 0 && day != 6) {
    res.render(__dirname + "/views/index.ejs", {
      time: "weekday",
      action: "work hard",
    });
  } else {
    res.render(__dirname + "/views/index.ejs", {
      time: "weekend",
      action: "enjoy",
    });
  }
});

app.listen(port, () => console.log("Server Running on Port : " + port));
