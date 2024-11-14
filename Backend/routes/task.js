const express = require("express");
const router = express.Router();
const createController = require("../controllers/task/create");
const updateController = require("../controllers/task/update");

router.put('/updateTask/:id', updateController);

router.get('/tasks/:currentuser', createController);

router.get('/deleteTask/:id', deleteController);

router.post('/taskform', createController);

module.exports = router