const { Router } = require('express');
const usersController = require('../controllers/usersController');
const usersRouter = Router();

usersRouter.get('/', usersController.usersListGet);
usersRouter.get('/create', usersController.usersCreateGet);
usersRouter.get('/search', usersController.usersSearchGet);
usersRouter.get('/:id/update', usersController.usersUpdateGet);
usersRouter.post('/create', usersController.usersCreatePost);
usersRouter.post('/:id/update', usersController.usersUpdatePost);
usersRouter.post('/:id/delete', usersController.usersDeletePost);

module.exports = usersRouter;
