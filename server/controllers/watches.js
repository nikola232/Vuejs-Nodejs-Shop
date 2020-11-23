const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async');
const Watch = require('../models/Watches');

// @desc    Get All Watches
// @route   GET /api/watches
// @access  Public
exports.getWatches = asyncHandler(async (req, res, next) => {
    const watch = await Watch.find();

    res.status(200).json(watch);
});

// @desc    Get Single Watches
// @route   GET /api/watch/:id
// @access  Public
exports.getWatch = asyncHandler(async (req, res, next) => {
    const watch = await Watch.findById(req.params.id);

    if (!watch) {
        return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: watch })

});

// @desc    Create new watch
// @route   POST /api/watches
// @access  Private
exports.createWatch = asyncHandler(async (req, res, next) => {
    const watch = await Watch.create(req.body);
    console.log(watch, 'sssssss')

    res.status(201).json({ success: true, data: watch })
});

// @desc    Update watch
// @route   PUT /api/watch/:id
// @access  Private
exports.updateWatch = asyncHandler(async (req, res, next) => {
    const watch = await Watch.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if(!watch) {
        return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: watch })

});
// @desc    Delete watch
// @route   DELETE /api/watch/:id
// @access  Private
exports.deleteWatch = asyncHandler(async (req, res, next) => {
    const watch = await Watch.findByIdAndDelete(req.params.id);

    if(!watch) {
        return next(
            new ErrorResponse(`Watch not found with id of ${req.params.id}`, 404)
        );
    }

    res.status(200).json({ success: true, data: {} })
})

// @desc    Upload photo for bootcamp
// @route   PUT /api/watches/:id/photo
// @access  Private
exports.watchPhotoUpload = asyncHandler(async (req, res, next) => {
    const watch = await Watch.findByIdAndDelete(req.params.id);

    if(!watch) {
        return next(new ErrorResponse(`Watch not found with id of ${req.params.id}`, 404));
    }

    if (!req.files) {
        return next(new ErrorResponse(`Please upload a file`, 400));
    }

    const file = req.files.file

    // Make sure the image is a photo
    if (!file.mimetype.startsWith('image')) {
        return next(new ErrorResponse(`Please upload an image file`, 400));
    }
    
    // Create custom filename
    file.name = `photo_${watch._id}`

    file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
        if (err) {
            console.log(err);
            return next(new ErrorResponse('Problem with file upload', 500));
        }

        await Watch.findByIdAndUpdate(req.params.id, { photo: file.name })

        res.status(200).json({
            success: true,
            data: file.name
        });
    });
})