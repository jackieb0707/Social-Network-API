const router = require('express').Router();

const {
    getAllThought,
    getUserById,
    createUser,
    UpdateUser,
    DeleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/user-controller');

// api users
router.route('/').get(getAllUser).post(createUser);

// api/user/:id
router.route('/:id').get(getUserById).put(updateUser).delete(DeleteUser);

// api/users/:userId/friends/:friendId

router.route('/userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
