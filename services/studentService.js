const db = require('../config/db');

const studentService = {
  createStudent: async ({ studentID, studentName, email }) => {
    const [result] = await db.execute(
      "INSERT INTO students (studentID, studentName, email) VALUES (?, ?, ?)",
      [studentID, studentName, email]
    );
    return result;
  },

  getStudent: async () => {
    const [rows] = await db.query("SELECT * FROM students");
    return rows;
  },
};

module.exports = { studentService };

