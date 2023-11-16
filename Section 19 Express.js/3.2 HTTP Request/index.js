import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1><center>🙏 Sarvanna Namaskar 🙏</center></h1>");
});

app.get("/about" , (req,res) => {
    res.send("<h1><center>This is the about page 😊</center></h1>")
})

app.get("/contact" , (req,res) => {
    res.send("<h1><center>This is the contact page 📞</center></h1>")
} )

app.listen(port , () => {
    console.log("Hello There");
})
