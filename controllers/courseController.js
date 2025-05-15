const { courseService } = require("../services/courseService")

const courseController ={
    getcourse: async(req, res, next)=>{
        try {
            const courses =await courseService.getCourse();
            res.json({data: courses});
        } catch (error) {
            next(error);
        }
    },

    createcourse: async(req, res, next)=>{
        try {
            const {courseID, courseTitle, courseDuration}= req.body;
            const result= await courseService.createCourse({courseID, courseTitle, courseDuration})
            res.json({ message: "Course created successfully", data: result })
        } catch (error) {
            next(error)
        }
    }
}

module.exports={courseController}