const express = require('express');
const router = express.Router();
const { authCheck } = require('../middleware/auth')
const Person = require('../models/person')
const cors = require('cors')
const app = express()


const { create,
        list, 
        read, 
        update, 
        remove,
} = require('../controllers/person');
const { uploadFile } = require('../middleware/uploadfile')




/*app.get('/admin/upload1', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true); 
});*/

//@route    localhost:5000/api/event
//@method   POST
//@access   Public
router.get('/person', authCheck, list);

//@route    localhost:5000/api/event
//@method   GET
//@access   Public
router.get('/person/:id', authCheck, read);

//@route    localhost:5000/api/event
//@method   GET
//@access   Public
router.post('/person', authCheck, uploadFile , create);

//@route    localhost:5000/api/event
//@method   PUT
//@access   Public
router.put('/person/:id', authCheck, update);
//@route    localhost:5000/api/event
//@method   DELETE
//@access   Public
router.delete('/person/:id', authCheck, remove);

//@route    localhost:5000/api/event
//@method   GET
//@access   Public
router.get('/person/download/:id', authCheck,  async (req, res) => {
    try {
      const file = await Person.findById(req.params.id);
      res.set({
        'Content-Type': file.file_mimetype
      });
      res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
      res.status(400).send('Error while downloading file. Try again later.');
    }
  });



module.exports = router;