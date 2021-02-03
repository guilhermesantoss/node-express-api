import { v4 as uuidv4 } from 'uuid';

let users = [{
  "name": "Fernando",
  "age": 29
}];

// export const getUsers = (req, res) => {
export function getUsers(req, res) {
  res.status(200).send(users);
};

export const createUsers = (req, res) => {
  const user = req.body;
  
  const userWithId = { id: uuidv4(), ...user };

  // userWithId = {
  //   id: "62b8f76c-b1e9-43ed-b78f-fcb94e17850a",
  //   firstName: "Margareth",
  //   lastName: "Sulivan",
  //   age: 35
  // }

  users.push(userWithId);
 
  res.status(201);
  res.json({
    status: 201,
    message: "User created with success!",
    user: userWithId
  });
  // res.status(201).send(`User with the name ${user.firstName} added to the database!`);
};

// export const getUser = (req, res) => {
//   const { id } = req.params;
  
//   const foundUser = users.find((user) => user.id === id);

//   if (!foundUser) {
//     res.json({
//       status: 204,
//       message: "Invalid ID"
//     });
//   } else {
//     res.send(foundUser);
//   }  
// };

// export const deleteUser = (req, res) => {
//   const { id } = req.params;

//   users = users.filter((user) => user.id !== id);

//   res.send(`User with the id ${id} deleted from the database.`);
// };

// export const updateUser = (req, res) => {
//   const { id } = req.params;
//   const { firstName, lastName, age } = req.body;

//   const user = users.find((user) => user.id  === id);

//   if (firstName) user.firstName = firstName;
//   if (lastName) user.lastName = lastName;
//   if (age) user.age = age;
  
//   res.send(`User with the id ${id} has been updated`);
// };