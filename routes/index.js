var express = require('express');
var multer  = require('multer');
var path =require('path');
var uploadmodel= require('../modules/upload');
var router = express.Router();

router.use(express.static(__dirname+"./public/"));
var Storage=multer.diskStorage({
  destination:"./public/uploads/",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});

var upload = multer({
storage:Storage
}).single('file');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'File Uploads',success:'' });
});
router.post('/upload',upload, function(req, res, next) {
  var imagefile=req.file.filename;
  var success=req.file.filename+"Uploaded susscess";
  var imgDetails= new uploadmodel({
    imagename:imagefile
  });
  imgDetails.save(function(err,doc){
    if(err) throw err;
    res.render('upload-file', { title: 'File Uploads',success:success});

  });

 
});
router.get('/upload', function(req, res, next) {
  res.render('upload-file', { title: 'File Uploads',success:'' });
});
module.exports = router;
