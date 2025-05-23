const { studentService } = require("../services/studentService");

const studentController = {
  getstudent: async (req, res, next) => {
    try {
      const students = await studentService.getStudent();
      res.json({ data: students });
    } catch (error) {
      next(error);
    }
  },

  createstudent: async (req, res, next) => {
    try {
      const { studentID, studentName, email } = req.body;
      const result = await studentService.createStudent({ studentID, studentName, email });
      res.json({ message: "Student created successfully", data: result });
    } catch (error) {
      next(error);
    }
  },
  getEnrollmentDetail: async(req, res, next)=>{
        try {
            const {studentID} = req.params;
            const result=await studentService.getEnrollByStudentID(studentID)
            res.json({data: result})
        } catch (error) {
            next(error)
        }
    },

    joinpractice:async (req, res, next)=>{
        try {
            const result= await studentService.joinPractice();
            res.json({data:result})
        } catch (error) {
            res.json({"error": error})
        }
    }
};

    

module.exports = { studentController };
