const PostsController = require('../Posts/PostsController/PostsController')
const router = require('express').Router()
const path = require('path')

// Multer
const multer = require('multer')

const storage = multer.diskStorage({
    destination: './images',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    },
})
const fileUpload = multer({ storage })

router.post('/dataPost', fileUpload.single('images'), PostsController.savePost)

router.get('/getAllData', PostsController.getAllPosts)
router.get('/getPost/:id', PostsController.getPost)

module.exports = router
