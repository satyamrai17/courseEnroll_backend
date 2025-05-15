const {Router}= require('express')
// const { enrollmentController }= require("../controllers/enrollmentController");
const {enrollmentController} = require("../controllers/enrollmentController")
const { enrollSchema } = require('../models/enrollmentModel');
const validateRequest = require('../middlewares/validateRequest');
const router= Router();

router.get('/', enrollmentController.getenroll);
router.post('/', validateRequest(enrollSchema), enrollmentController.createEnroll);

module.exports= router;