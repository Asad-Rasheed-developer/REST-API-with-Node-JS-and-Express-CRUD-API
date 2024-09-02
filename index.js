import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";
const app = express();
app.use(bodyParser.json());
const PORT = 5000;

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("HELLO FROM HOMEPAGE");
});

// const users = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     age: 25,
//   },
// ];

// app.post("/users", (req, res) => {
//   console.log("POST ROUTE REACHED");
//   const user = req.body;
//   console.log("Request object: ", req.body);

//   users.push(user);
//   console.log(user);

//   res.send(`user with the name ${user.firstName} added to database`);
// });
