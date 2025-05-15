const Joi= require('joi')

const enrollSchema= Joi.object({
    studentID: Joi.number().required(),
    courseID: Joi.number().required()
})
module.exports={enrollSchema}