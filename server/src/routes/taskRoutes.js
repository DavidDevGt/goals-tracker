const express = require('express');
const { celebrate, Joi, errors } = require('celebrate');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.get('/getTasks', taskController.getTasks);

router.post('/addTask', celebrate({
    body: Joi.object().keys({
        task: Joi.string().required(),
        deadline: Joi.string().required()
    })
}), taskController.addTask);

router.delete('/removeTask/:id', celebrate({
    params: Joi.object().keys({
        id: Joi.number().required()
    })
}), taskController.removeTask);

router.use(errors());

module.exports = router;
