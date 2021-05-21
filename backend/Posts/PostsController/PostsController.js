const Post = require('../PostsModel/PostsModel');
const path = require('path');

getAllPosts = async (req, res) => {
  try {
    let data = await Post.find({});
    res.json(data);
  } catch (e) {
    console.log(e);
  }
};

savePost = async (req, res) => {
  let post = new Post({
    type: req.body.type,
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    mileage: req.body.mileage,
    fuelType: req.body.fuelType,
    transimssionType: req.body.transimssionType,
    price: req.body.price,
    description: req.body.description,
    image: 'http://localhost:3001/' + req.file.path.replace(`\\`, `/`),
    timeStamp: new Date(),
  });
  try {
    let savedPost = await post.save();
    res.json(savedPost);
  } catch (e) {
    console.log(e);
  }
};

getPost = (req, res) => {
  const id = req.params.id;

  Post.findById(id).then((data) => res.json(data));
};

module.exports = {
  getAllPosts,
  savePost,
  getPost,
};
