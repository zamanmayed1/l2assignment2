import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

// User Routes

// 1. Create a new user
router.post('/', UserControllers.createUserController);

// 2. Retrieve a list of all users
router.get('/', UserControllers.getUserController);

// 3. Retrieve a specific user by ID
router.get('/:userId', UserControllers.getUserByUserIdController);

// 4. Update user information
router.put('/:userId', UserControllers.updateUserByUserIdController);

// 5. Delete a user
router.delete('/:userId', UserControllers.deleteUserController);


export const UserRoute = router;
