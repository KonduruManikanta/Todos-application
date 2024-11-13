const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateUser = require('../middleware/authMiddleware'); // Ensure authentication middleware

// Get the user's profile
router.get('/profile', authenticateUser, userController.getUserProfile);

// Update the user's profile
router.put('/profile', authenticateUser, userController.updateUserProfile);

// Delete the user's profile
router.delete('/profile', authenticateUser, userController.deleteUserProfile);

module.exports = router;
