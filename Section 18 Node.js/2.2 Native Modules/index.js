var fs = require("fs");

fs.writeFile("message.txt", "Namaskar Bharat!", (err) => {
  if (err) throw err;
});

fs.readFile('message.txt', "utf8" , (err, data) => {
  if (err) throw err;
  console.log(data);
});
