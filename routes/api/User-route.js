// Express router for handling routes related to users and friends

const router = require('express').Router();

const {
    getUsers, getSingleUser, 
    createUser, deleteUser, 
    updateUser, removeFriend, 
    addfriend,
} = require ('../../controllers/userController');

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

router.route('/:id/friends/:friendId')
    .post(addfriend)
    .delete(removeFriend);

module.exports = router;