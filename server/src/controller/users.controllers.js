const path = require('path');
const usersFile = path.resolve(__dirname, '../../data/users.json');
const fs = require('fs');
const { v4 } = require('uuid');

const controller = {}

controller.allUsers = (req, res) => {
    fs.readFile(usersFile, (err, data) => {
        if(err) throw err
        const jsonData = JSON.parse(data)
        res.send(jsonData)
    })
}

controller.createUser = (req, res) => {
    fs.readFile(usersFile, (err, data) => {
        if (err) {res.satus(500).send('Error al leer el archivo de usuarios')}

        const jsonData = JSON.parse(data)

        //comprobamos que el usuario no existe:
        const userExistMail = jsonData.some(user => user.email===req.body.mail)
        if(userExist){
            return res.status(409).send('Existe ese usuario')
        }
        const userExist = jsonData.some(user => user.username===req.body.username)
        if(userExistMail){
            return res.status(409).send('Existe ese correo')
        }

        //aqui creamose el nuevo usuario y lo metemos en el array de jsonData
        const newUser = req.body
        newUser.id = v4();
        jsonData.push(newUser)

        //aqui directamente al hacer write, ya e manda el usuario dierctamente, xq antes hemos añadido otro nuevo
        fs.write(usersFile, JSON.stringify(jsonData), err => {
            if(err) {return res.status(500).send('Eror al guardar el arcihvo')}

            res.status(201).send('Usuario creado correctamente')
        })
    })
}