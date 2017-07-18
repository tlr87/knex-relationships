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



router.get('/:id', function (req, res) {
  db.getProfiles(req.app.get('connection'))
    .where({'profile_id': req.params.id})
    .join('users','id', '=', req.params.id)
    .then(function(profile){
        console.log(profile)
        res.render('profile', profile[0])
    })
    .catch(function (err) {
       res.status(500).send('DATABASE ERROR: ' + err.message)
     })
})



module.exports = router
