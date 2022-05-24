const router = require('express').Router();
const courseRoutes = require('./thought-Routes');
const studentRoutes = require('./userRoutes');

router.use('/Thought', thoughtRoutes);
router.use('/students', userRoutes);

module.exports = router;
