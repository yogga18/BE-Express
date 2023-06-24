// middleware handle File with

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    console.log('file', file);

    const timeStamp = Date.now();
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, `${timeStamp}-${fileName}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 3 * 1000 * 1000, // 3 MB (max file size)
  },
});

module.exports = upload;
