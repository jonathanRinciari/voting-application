require('dotenv').config();

var ids = {
github: {
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GIT_SECRET,
    callbackURL: process.env.GIT_CALLBACK
  }
}

module.exports = ids