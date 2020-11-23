const express = require('express');
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/admin');

const User = require('../models/User');
 
const router = express.Router();

const { protect, authorize } = require('../middleware/auth')

router.use(protect);
router.use(authorize('admin'));

router.route('/')
    .get(getUsers)
    .post(protect, createUser);
    
router.route('/:id')
    .get(getUser)
    .put(protect, updateUser)
    .delete(protect, deleteUser)

module.exports = router;