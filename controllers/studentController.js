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
};

module.exports = { studentController };
