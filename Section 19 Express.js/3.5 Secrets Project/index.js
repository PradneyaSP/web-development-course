import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const PORT = 3000;
let isCorrect = false;
const SECRET_PASSWORD = "ILoveProgramming";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
  const password = req.body["password"];
  if (SECRET_PASSWORD === password) isCorrect = true;
  else isCorrect = false;
  next();
}

app.use(checkPassword);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (isCorrect) res.sendFile(__dirname + "/public/secret.html");
  else res.redirect("/");
});

app.listen(PORT, () => {
  console.log("Listening on Port: " + PORT);
});
