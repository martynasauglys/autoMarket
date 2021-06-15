const PostsController = require('../Posts/PostsController/PostsController');
const UserController = require('../User/UserController');
const router = require('express').Router();
const path = require('path');

// Middlewares
const UserMiddleware = require('../User/Authenticator');

// Multer
const multer = require('multer');

const storage = multer.diskStorage({
  destination: './images',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const fileUpload = multer({ storage });

// User routes
router.post('/signup', UserController.signUp);
router.post('/login', UserController.login);

// Upload post
router.post(
  '/dataPost',
  UserMiddleware.authenticate,
  fileUpload.single('images'),
  PostsController.savePost
);

// Get posts
router.get('/getAllData', PostsController.getAllPosts);
router.get('/getPost/:id', PostsController.getPost);

module.exports = router;
