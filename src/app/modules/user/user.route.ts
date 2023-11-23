import express from "express";
import { UserContollers } from "./user.controller";
const router = express.Router();

// 1. Create a new user
router.post('/', UserContollers.createUserController)
// 2. Retrieve a list of all users
router.get('/', (req, res) => {
    res.json({
        "success": true,
        "message": "Users fetched successfully!",
        "data": {}
    })
})

//3. Retrieve a specific user by ID
router.get('/:userId', (req, res) => {
    res.json({
        "success": true,
        "message": "User fetched successfully!",
        "data": {}
    })
})
//4. Update user information
router.patch('/:userId', (req, res) => {
    res.json({
        "success": true,
        "message": "User updated successfully!",
        "data": {}
    })
})
//5. Delete a user
router.delete('/:userId', (req, res) => {
    res.json({
        "success": true,
        "message": "User deleted successfully!",
        "data": {}
    })
})
//6. Add New Product in Order (Bonus)
router.patch('/:userId/orders', (req, res) => {
    res.json({
        "success": true,
        "message": "Order created successfully!",
        "data": {}
    })
})
//7. Retrieve all orders for a specific user
router.get('/:userId/orders', (req, res) => {
    res.json({
        "success": true,
        "message": "Order fetched successfully!",
        "data": {}
    })
})
//8. Calculate Total Price of Orders for a Specific User
router.get('/:userId/orders/total-price', (req, res) => {
    res.json({
        "success": true,
        "message": "Total price calculated successfully!",
        "data": {
            "totalPrice": "---"
        }
    })
})

export const UserRoute = router;

