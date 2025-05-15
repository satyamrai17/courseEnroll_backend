const enrollmentService = require("../services/enrollmentService")

const enrollmentController = {
    createEnroll: async(req, res, next)=>{
        try {
            const {studentID, courseID}=req.body;
            const result = await enrollmentService.enroll({studentID, courseID});
            res.json({message: "student has enrolled", data: result})
        } catch (error) {
            next(error);
        }
    },
    getenroll: async(req, res, next)=>{
        try {
            const result= await enrollmentService.getEnroll();
            res.json({data: result})
        } catch (error) {
            next(error)
        }
    }
};

module.exports = { enrollmentController };