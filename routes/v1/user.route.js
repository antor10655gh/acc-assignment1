const express = require('express');
const app = express.Router();
const toolsControllers = require('../../controllers/user.controller')

app.get('/', toolsControllers.allUsers)
app.post('/', toolsControllers.saveUser)
app.get('/:id', toolsControllers.userDetails)
app.patch('/:id', toolsControllers.userUpdate)
app.delete('/:id', toolsControllers.userDelete)


module.exports = app;