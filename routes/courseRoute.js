const {Router} = require('express');
const { courseController } = require('../controllers/courseController');
const validateRequest = require('../middlewares/validateRequest');
const courseSchema = require('../models/courseSchema');

const router= Router();
router.get('/', courseController.getcourse);
router.post('/', validateRequest(courseSchema), courseController.createcourse);

module.exports= router;