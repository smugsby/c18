const router = require('express').Router();
const thoughtRoutes = require('./thought');
const pizzaRoutes = require('./userRoutes');

router.use('/comments', thoughtRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;
