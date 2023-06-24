const express = require('express');

// import function from controller
const usersController = require('../controller/users.js');

const router = express.Router();

// users START
router.post('/', usersController.createUser);

router.get('/', usersController.getAllUsers);

router.put('/:id', usersController.updateUser);

router.delete('/:id', usersController.deletUser);

router.get('/:id', usersController.getUserById);

router.get('/search/:name', usersController.searchByName);
// users END

module.exports = router;
