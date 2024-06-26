const express = require('express');
const { celebrate, Joi, errors } = require('celebrate');
const goalController = require('../controllers/goalController');

const router = express.Router();

router.get('/getGoals', goalController.getGoals);

router.post('/addGoal', celebrate({
    body: Joi.object().keys({
        goal: Joi.string().required(),
        description: Joi.string().required(),
        deadline: Joi.string().required()
    })
}), goalController.addGoal);

router.delete('/removeGoal/:id', celebrate({
    params: Joi.object().keys({
        id: Joi.number().required()
    })
}), goalController.removeGoal);

router.use(errors());

module.exports = router;
