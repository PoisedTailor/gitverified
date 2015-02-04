exports.setup = function (User, config) {
  var passport = require('passport');
  var GitHubStrategy = require('passport-github').Strategy;

  passport.use(new GitHubStrategy({
      clientID: config.github.clientID,
      clientSecret: config.github.clientSecret,
      callbackURL: config.github.callbackURL
    },
    function(token, tokenSecret, profile, done) {
      console.log('asdf')
    User.findOne({
      'github.id': profile.id
    }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        user = new User({
          name: profile.displayName,
          username: profile.username,
          role: 'user',
          provider: 'github',
          github: profile._json
        });
        user.save(function(err) {
          if (err) return done(err);
          user.getSkills(token);
          return done(err, user);
        });
      } else {
        return done(err, user);
      }
    });
    }
  ));
};
