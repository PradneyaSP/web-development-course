import express from "express";

const app = express();
const port = 3000;

app.get("/" , (req,res)=> {
  res.send("This is the command to get data from the server");
})

app.listen(port, () => {
  console.log("Hello There ! This is my first server!");
});


/*
  GET: 
  Retrieves information from the specified resource, and should only be used to request data (not
  modify it).

  POST:
  Sends data to the server for processing, usually resulting in a change in the server state or side
  effects on the server.

  PUT:
  Updates a current resource or creates it if it doesn't exist, with the client providing a complete
  and updated copy of the resource.

  PATCH:
  Updates parts of an existing resource, with the client providing only the parts of the resource that
  need to be updated.

  DELETE:
  Removes the specified resource from the server.
*/

