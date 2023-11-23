import { Request, Response } from 'express'
import { UserService } from './user.service';
import userValidatorSchema from './user.joi.validator';
// Create Student

const createUserController = async (req: Request, res: Response) => {
    try {
        const userData = req.body
        const { value, error } = userValidatorSchema.validate(userData)
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

// 2. Retrieve a list of all users

const getUserController = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getallUserService();
        res.status(200).json({
            "success": true,
            "message": "User created successfully!",
            "data": result,
        });

    } catch (err) {
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

// 3. Retrieve a specific user by ID

const getUserByUserIdController = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const result = await UserService.getAUserByUserIdService(userId);
        res.status(200).json({
            "success": true,
            "message": "User fetched successfully!",
            "data": result,
        });

    } catch (err) {
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


// 5.Delete a user by ID

const deleteUserController = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const result = await UserService.deleteAUserService(userId);
        res.status(200).json(result);

    } catch (err) {
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
    createUserController,
    getUserController,
    getUserByUserIdController,

    deleteUserController
};