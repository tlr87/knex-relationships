var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/add', function(req, res) {
  res.render("edit")
})



router.post('/add', function(req, res) {
    var newUser = {
      name: req.body.name,
      email: req.body.email
    }
    var newProfile = {
      img : req.body.img,
      bio : req.body.bio
    }
    db.createUser(newUser, newProfile, req.app.get('connection'))
    // console.log(req.body.name);
    res.redirect("/")

})


router.get('/:id', function (req, res) {
  db.getProfiles(req.app.get('connection'))
    .where({'user_id': req.params.id}) // this was the change
    .join('users','id', '=', req.params.id)
    .then(function(profile){
        console.log("A" + profile)
        res.render('profile', profile[0])
    })
    .catch(function (err) {
       res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
