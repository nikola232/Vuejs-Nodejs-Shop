const express = require('express');

const router = express.Router();

const { protect } = require('../middleware/auth');

const { 
    getWatches, 
    getWatch, 
    createWatch, 
    updateWatch, 
    deleteWatch,
    watchPhotoUpload
} = require('../controllers/watches');


router.route('/:id/photo')
    .put(protect, watchPhotoUpload);

router.route('/')
    .get(getWatches)
    .post(createWatch);
    
router.route('/:id')
    .get(getWatch)
    .put(protect, updateWatch)
    .delete(protect, deleteWatch)

router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Hello'})
})

module.exports = router;