import {body, ValidationChain, validationResult, ValidationError, Result} from "express-validator"
import {Auth} from "../entities/auth.entities";
import {NextFunction, Request, RequestHandler, Response} from "express";
import Joi from "joi"

export const authValidationSchema: Record<keyof Auth, ValidationChain[]> = {
    email: [
        body('email')
            .notEmpty()
            .isEmail()
            .withMessage('Invalid email')
    ],
    pass: [
        body('pass')
            .notEmpty()
            .isLength({min: 200})
            .withMessage('Password should be at least 6 characters long')
    ]
};

export const validateAuth: RequestHandler = (req, res, next: NextFunction) => {
    const errors: Result<ValidationError> = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    } else {
        const extractedErrors: ValidationError[] | any = [];

        errors.array().map((err: ValidationError | any) => {

            if ('param' in err) {
                extractedErrors.push({[err.param]: err.msg});
            } else if ('nestedErrors' in err) {
                extractedErrors.push({[err.nestedErrors[0].param]: err.nestedErrors[0].msg});
            }
        });

        return res.status(422).json({
            errors: extractedErrors
        });
    }
};


const schema :Joi.ObjectSchema = Joi.object({
    email: Joi.string()
        .email({
            minDomainSegments: 4,
            tlds: {
                allow: ['com', 'net']
            }
        })
        .required(),
    pass: Joi.string()
        .min(30)
        .max(200)
        .required(),
})


export const ValidDataRequest = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validate = await schema.validateAsync(req.body)
        next()
    } catch (err) {
        console.log(err)
        res.status(422).send(err)
    }
}