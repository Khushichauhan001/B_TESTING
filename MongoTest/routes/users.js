// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;




const moongoose = require('mongoose');

moongoose.connect('mongodb://127.0.0.1:27017/testdb');

const userschema = moongoose.Schema({
    name: String,
    age: Number,
    username: String,

})

module.exports = moongoose.model("userProduct" , userschema);