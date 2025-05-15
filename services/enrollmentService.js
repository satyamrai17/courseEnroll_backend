const db= require('../config/db')

const enrollmentService={
    enroll: async({studentID, courseID})=>{
        const [result]= await db.execute("INSERT INTO enrollments(studentID, courseID, enrolled_at) values(?, ?, now())",[studentID, courseID]);
        return result
    },

    getEnroll: async()=>{
        const [row]= await db.query("SELECT * FROM enrollments")
        return row
    },
}
module.exports=enrollmentService;