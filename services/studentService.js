const db = require('../config/db');

const studentService = {
  createStudent: async ({ studentID, studentName, email }) => {
    // const [result] = await db.execute(
    //   "INSERT INTO students (studentID, studentName, email) VALUES (?, ?, ?)",
    //   [studentID, studentName, email]
    // );
    const [result] = await db.execute("call createStudent(?, ?, ?)" ,[studentID, studentName, email]);
    console.log(result)
    return result;
  },

  getStudent: async () => {
    // const [rows] = await db.query("SELECT * FROM students");
    const [rows] = await db.query("call getStudent()");
    return rows;
  },
  getEnrollByStudentID: async(studentID)=>{
        await db.query(" CALL getEnrollmentDetails(?, @result_json)",[studentID]);
        const [rows] = await db.query("SELECT @result_json as result");
        return JSON.parse(rows[0].result)
    },

    joinPractice: async()=>{
        const [rows] = await db.query("CALL joinPractice()");
        return rows;
    }
};


  

module.exports = { studentService };

