import { Request, Response } from 'express';
import { UserService } from './user.service';
import userValidatorSchema from './user.joi.validator';
import { Document } from 'mongoose';
import { customError } from './custom.errors';

// 1. Create a new user
export const createUserController = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const { value, error } = userValidatorSchema.validate(userData);

    if (error) {
      customError.handleValidationErrorResponse(res, error);
    } else {
      try {
        const result = await UserService.createUserService(value);
        const { password, ...withoutPass } = result.toObject();
        customError.handleSuccessResponse(res, 'User created successfully!', withoutPass);
      } catch (error) {
        customError.handleInternalServerError(res);
      }
    }
  } catch (err) {
    customError.handleInternalServerError(res);
  }
};

// 2. Retrieve a list of all users
export const getUserController = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUserService();
    customError.handleSuccessResponse(res, 'Users fetched successfully!', result);
  } catch (err) {
    customError.handleInternalServerError(res);
  }
};

// 3. Retrieve a specific user by ID
export const getUserByUserIdController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await UserService.getAUserByUserIdService(userId);

    if (result.length <= 0) {
      customError.handleNotFoundResponse(res);
    } else {
      customError.handleSuccessResponse(res, 'User fetched successfully!', result);
    }
  } catch (err) {
    customError.handleInternalServerError(res);
  }
};

//  4. Update user information
export const updateUserByUserIdController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const userData = req.body;
    const result = await UserService.updateAUserByUserIdService(userId, userData) as Document;

    if (result === null) {
      customError.handleNotFoundResponse(res);
    } else {
      try {
        const { password, ...withoutPass } = result.toObject();
        customError.handleSuccessResponse(res, 'User updated successfully!', withoutPass);
      } catch (error) {
        customError.handleInternalServerError(res);
      }
    }
  } catch (err) {
    customError.handleInternalServerError(res);
  }
};

// 5. Delete a user by ID
export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await UserService.deleteAUserService(userId);
    if (result === 0) {
      customError.handleNotFoundResponse(res)
    } else {
      customError.handleSuccessResponse(res, 'User deleted successfully!', result);
    }

  } catch (err) {
    customError.handleInternalServerError(res);
  }
};

export const UserControllers = {
  createUserController,
  getUserController,
  getUserByUserIdController,
  updateUserByUserIdController,
  deleteUserController,
};
