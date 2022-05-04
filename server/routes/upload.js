const express = require('express')

const router = express.Router();

const { uploadFile } = require('../middleware/uploadfile');
const { upload } = require('../controllers/upload');
const { authCheck, adminCheck } = require('../middleware/auth');



//@route    localhost:5000/api/upload
//@method   POST
//@access   Public
router.post('/upload', authCheck, uploadFile,);




module.exports = router;