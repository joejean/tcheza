var express = require('express');
var router = express.Router();
var Firebase = require('firebase');

var myFirebaseRef = new Firebase("https://glowing-torch-1117.firebaseIO.com")
//var database = Firebase("https://glowing-torch-1117.firebaseIO.com/web/data")

/* GET home page. */
router.route('/')
.get(function(req, res, next) {
  res.render('index.html', { title: 'Tcheza' });
})
.post(function(req, res, next){
    data = req.body;
    myFirebaseRef.authWithPassword({
      email    : data.email,
      password : data.password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
})

router.route('/register')
.get(function(req, res, next){
    res.render('register.html', {title: 'Tcheza'})
})
.post(function(req, res, next) {
    data = req.body;
    myFirebaseRef.createUser({
      email    : data.email,
      password : data.password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
})




router.get('/chat', function(req, res, next) {
  res.render('chat.html', { title: 'Tcheza' });
});



module.exports = router;
