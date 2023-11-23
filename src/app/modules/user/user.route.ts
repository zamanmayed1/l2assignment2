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

// Order Routes (Bonus)

// 6. Add New Product in Order
router.patch('/:userId/orders', (req, res) => {
  res.json({
    success: true,
    message: 'Order created successfully!',
    data: {},
  });
});

// 7. Retrieve all orders for a specific user
router.get('/:userId/orders', (req, res) => {
  res.json({
    success: true,
    message: 'Order fetched successfully!',
    data: {},
  });
});

// 8. Calculate Total Price of Orders for a Specific User
router.get('/:userId/orders/total-price', (req, res) => {
  res.json({
    success: true,
    message: 'Total price calculated successfully!',
    data: {
      totalPrice: '---',
    },
  });
});

export const UserRoute = router;