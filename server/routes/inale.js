const express = require('express');
const router = express.Router();
const { authCheck } = require('../middleware/auth');
const InAle =require('../models/inale')

const { create,
        list, 
        read, 
        update, 
        remove
     
} = require('../controllers/inale');
const { uploadFile } = require('../middleware/uploadfile')

//@route    localhost:5000/api/event
//@method   POST
//@access   Public
router.get('/inale', authCheck, list);

//@route    localhost:5000/api/event
//@method   GET
//@access   Public
router.get('/inale/:id', authCheck, read);

//@route    localhost:5000/api/event
//@method   GET
//@access   Public
router.post('/inale', authCheck, uploadFile , create);

//@route    localhost:5000/api/event
//@method   PUT
//@access   Public
router.put('/inale/:id', authCheck, update);
//@route    localhost:5000/api/event
//@method   DELETE
//@access   Public
router.delete('/inale/:id', authCheck, remove);

router.get('/inale/download/:id', authCheck,  async (req, res) => {
    try {
      const file = await InAle.findById(req.params.id);
      res.set({
        'Content-Type': file.file_mimetype
      });
      res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
      res.status(400).send('Error while downloading file. Try again later.');
    }
  });
module.exports = router;