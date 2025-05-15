const Joi= require('joi')

const courseSchema= Joi.object({
    courseID: Joi.number().required(),
    courseTitle: Joi.string().min(3).required(),
    courseDuration: Joi.string().required(),
})

module.exports= courseSchema