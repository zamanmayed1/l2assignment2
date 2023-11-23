import { Request, Response } from 'express'
import { UserService } from './user.service';
import userValidatorSchema from './user.joi.validator';
// Create Student

const createUserController = async (req: Request, res: Response) => {
    try {
        const userData = req.body
        const {value , error} = userValidatorSchema.validate(userData)
        console.log({value});
        console.log({error});
        
        const result = await UserService.createUserService(value);
        res.status(200).json({
            "success": true,
            "message": "User created successfully!",
            "data": result,
        });
       

    } catch (err) {
        console.log(err);

        res.status(404).json({
            "success": false,
            "message": "User not Created",
            "error": {
                "code": 404,
                "description": "User not Created!"
            }
        });
    }
};

export const UserContollers = {
    createUserController
};