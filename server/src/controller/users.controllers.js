const path = require("path");
const usersFile = path.resolve(__dirname, "../../data/users.json");
const fs = require("fs");
const { v4 } = require("uuid");

const controller = {};

controller.allUsers = (req, res) => {
  fs.readFile(usersFile, (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);
    res.send(jsonData);
  });
};

controller.createUser = (req, res) => {
  console.log(req.body);
  fs.readFile(usersFile, (err, data) => {
    if (err) {
      res.satus(500).send("Error al leer el archivo de usuarios");
    }

    const jsonData = JSON.parse(data);

    const userExistMail = jsonData.some((user) => user.email === req.body.mail);
    if (userExist) {
      return res.status(409).send("Existe ese usuario");
    }
    const userExist = jsonData.some(
      (user) => user.username === req.body.username
    );
    if (userExistMail) {
      return res.status(409).send("Existe ese correo");
    }

    const newUser = req.body;
    newUser.id = v4();
    jsonData.push(newUser);
    fs.write(usersFile, JSON.stringify(jsonData), (err) => {
      if (err) {
        return res.status(500).send("Eror al guardar el arcihvo");
      }

      res.status(201).send("Usuario creado correctamente");
    });
  });
};

controller.deleteUser = (req, res) => {
  fs.readFile(usersFile, (err, data) => {
    if (err) {
      res.status(500).send("Error al leer el archivo");
    }

    const jsonData = JSON.parse(data);
    const userDeleteIndex = jsonData.findIndex(
      (user) => user.id === req.body.id
    );

    jsonData.splice(userDeleteIndex, 1);

    fs.writeFile(usersFile, JSON.stringify(jsonData), (err) => {
      if (err) {
        return res.status(500).send("Eror al guardar el arcihvo");
      }

      res.status(201).send("User borrado");
    });

    res.send(jsonData);
  });
};

controller.updateUser = (req, res) => {
  fs.readFile(usersFile, (err, data) => {
    if (err) {
      return res.status("Error al leer el archivo de usuarios");
    }

    const jsonData = JSON.parse(data);

    const userIndex = jsonData.findIndex((user) => user.id === req.body.userId);

    const newUser = { ...jsonData[userIndex], ...req.body };

    jsonData[userIndex] = newUser;
    res.send(jsonData);
  });
};

module.exports = controller;
