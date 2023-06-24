const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// import path & import function controller & import middleware
const userRoutes = require('./routes/users.js');
const ijinRoutes = require('./routes/ijin.js');
const middlewareLogReq = require('./middleware/loggingReq.js');
const upload = require('./middleware/multer.js');

const PORT = process.env.PORT || 5000;

// use middleware
app.use(middlewareLogReq); // using middleware as global
app.use(cors()); // allow all cors origin
app.use(express.json()); // allow request body json
app.use('/assets', express.static('public/images')); // allow access to assets folder

// use path (Grouping Routes)
app.use('/users', userRoutes);
app.use('/ijin', ijinRoutes);
// using middleware as local (only for this path)
app.post('/upload', upload.single('photo'), (req, res) => {
  res.json({
    message: 'Upload Success',
  });
});
// Error Handling
app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
