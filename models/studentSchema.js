const Joi= require('joi')

const studentSchema=Joi.object({
    studentID: Joi.number().required(),
    studentName: Joi.string().min(3).required(),
    email: Joi.string().email().lowercase().required(),
})

module.exports= studentSchema;