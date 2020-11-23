const express = require('express');
const { 
    getUsers,
    registerUser, 
    loginUser,
    getMe, 
    forgotPassword, 
    resetPassword, 
    updateDetails,
    updatePassword
} = require('../controllers/user')
 
const router = express.Router();

const { protect } = require('../middleware/auth')

router.get('/allusers', getUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, updateDetails);
router.put('/updatepassword', protect, updatePassword);
router.post('/forgotpassword', forgotPassword)
router.put('/resetpassword/:resettoken', resetPassword)

module.exports = router;