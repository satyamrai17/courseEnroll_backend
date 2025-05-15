const db= require('../config/db')

const courseService ={
    getCourse: async()=>{
        const [course] = await db.query("SELECT * FROM courses")
        return course;
    },

    createCourse: async({courseID, courseTitle, courseDuration})=>{
        const [result]= await db.execute(
              "INSERT INTO courses (courseID, courseTitle, courseDuration) VALUES (?, ?, ?)",
              [courseID, courseTitle, courseDuration]
            );
        return result;
    }
}
module.exports= {courseService}