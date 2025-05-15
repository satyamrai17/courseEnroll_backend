const { Router } = require("express");
const { studentController } = require("../controllers/studentController");
const validateRequest = require("../middlewares/validateRequest");
const studentSchema= require('../models/studentSchema')
const router=Router()

router.get("/", studentController.getstudent);
router.post("/", validateRequest(studentSchema), studentController.createstudent);


module.exports= router;
