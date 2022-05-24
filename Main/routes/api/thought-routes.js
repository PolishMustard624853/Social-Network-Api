const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtsById,
  addThought,
  updateThought,
  deleteThought,
} = require('../../thought-controllers');

// /api/courses
router.route('/').get(getCourses).post(createCourse);

// /api/courses/:courseId
router
  .route('/:thoughtId')
  .get(getSingleCourse)
  .put(updateCourse)
  .delete(deleteCourse);

module.exports = router;
