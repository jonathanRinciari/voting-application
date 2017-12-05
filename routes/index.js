var express = require('express');
var router = express.Router();
var passportGithub = require('../auth/githubauth');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.user)
  res.render('index', { title: 'Express' });
});

router.get('/auth/github', passportGithub.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/auth/github/callback',
  passportGithub.authenticate('github',  {
		successRedirect: '/',
		failureRedirect: '/login'
}));
module.exports = router;
