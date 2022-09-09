const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController')

// /api/comments/<pizzaId>
router.route('/:userId').post(thoughtController.addThought);

// /api/comments/<pizzaId>/<commentId>
router
  .route('/:usertId/:thoughId')
  .put(thoughtController.addThought)
  .delete(thoughtController.removeThought);

// /api/comments/<pizzaId>/<commentId>/<replyId>
router.route('/:userId/:thoughtId/:reactionId').post(addReaction).delete(thoughtController.deleteThought);

module.exports = router;
