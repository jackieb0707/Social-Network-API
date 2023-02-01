const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    UpdateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thought-controller');

// api thoughts
router.route('/').get(getAllThought).post(createThought);

// api/thoughts/:id
router 
.router(getThoughtById)
.get(getAllThought)
.put( UpdateThought)
.delete(deleteThought)

//api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);


//api/thoughts/:thoughtId/reactions:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
