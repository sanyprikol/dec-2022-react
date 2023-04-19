import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Тільки літери, не більше 20',
        'string.required': 'Це поле обов\'язкове'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min': 'Не менше 0',
        'number.max' : 'Не більше 1000000',
        'number.required' : 'Це поле обов\'язкове'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min' : 'Не нижче 1990 року',
        'number.max' : 'Не більше поточного року',
        'number.required' : 'Це поле обов\'язкове'
    })
});

export {
    carValidator
}
