import { v4 as uuidv4 } from "uuid";
var users = [];

export const getUser = (req, res) => {
  console.log(users);
  res.send(users);
};

export const addUser = (req, res) => {
  console.log("POST ROUTE REACHED");
  const user = req.body;
  const userId = uuidv4();

  const userWithId = { ...user, id: userId };
  users.push(userWithId);
  console.log("Request object: ", req.body);

  res.send(`user with the name ${user.firstName} added to database`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`user with the iD ${id} is removed`);
};
export const getID = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`user with the id ${id} is updated`);
};
