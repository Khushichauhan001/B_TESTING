var express = require('express');
var router = express.Router();
const userModel = require("./users");
const { use } = require('react');

/* GET home page. */
router.get('/', function(req, res) {
  res.render("index");
});

router.get('/', async function(req, res) {
  const createdUser = await userModel.create({
    username: "john",
    name: "John Doe",
    age: 25
  })
   res.send(createdUser);
});



router.get('/allusers', async function(req, res) {
  let AllUser = await userModel.find();
  res.send(AllUser);
});

router.get('/delete', async function(req, res) {
  let deletedUser = await userModel.findOneAndDelete({
    username: "john"
  });
  res.send(deletedUser);
})

module.exports = router;
