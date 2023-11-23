import { Request, Response } from 'express';
import { UserService } from './user.service';
import userValidatorSchema from './user.joi.validator';

// 1. Create a new user
const createUserController = async (req: Request, res: Response) => {
    try {
        const userData = req.body;
        const { value, error } = userValidatorSchema.validate(userData);

        // Validate user data
        if (error) {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                error: {
                    code: 400,
                    description: error.details[0].message,
                },
            });
        }
        const result = await UserService.createUserService(value);
        return res.status(200).json({
            success: true,
            message: 'User created successfully!',
            data: result,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: {
                code: 500,
                description: 'Internal server error',
            },
        });

    }
};

// 2. Retrieve a list of all users
const getUserController = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getAllUserService();

        res.status(200).json({
            success: true,
            message: 'Users fetched successfully!',
            data: result,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: {
                code: 500,
                description: 'Internal server error',
            },
        });
    }
};

// 3. Retrieve a specific user by ID
const getUserByUserIdController = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const result = await UserService.getAUserByUserIdService(userId);
        if (result.length <= 0) {
            res.status(200).json({
                "success": false,
                "message": "User not found",
                "error": {
                    "code": 404,
                    "description": "User not found!"
                }
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'User fetched successfully!',
                data: result,
            });
        }

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: {
                code: 500,
                description: 'Internal server error',
            },
        });
    }
};

// 4. Update user information
const updateUserByUserIdController = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const userData = req.body;
        const result = await UserService.updateAUserByUserIdService(userId, userData);

        res.status(200).json({
            success: true,
            message: 'User updated successfully!',
            data: result,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: {
                code: 500,
                description: 'Internal server error',
            },
        });
    }
};

// 5. Delete a user by ID
const deleteUserController = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const result = await UserService.deleteAUserService(userId);

        res.status(200).json({
            success: true,
            message: 'User deleted successfully!',
            data: result,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: {
                code: 500,
                description: 'Internal server error',
            },
        });
    }
};

export const UserControllers = {
    createUserController,
    getUserController,
    getUserByUserIdController,
    updateUserByUserIdController,
    deleteUserController,
};
