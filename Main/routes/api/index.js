const router = require('express').Router();
const courseRoutes = require('./thought-Routes');
const studentRoutes = require('./userRoutes');

router.use('/courses', thoughtRoutes);
router.use('/students', userRoutes);

module.exports = router;
