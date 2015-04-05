var accountdown = require('accountdown');
var levelup = require('levelup');
var db = level('./passworded.db');

var users = accountdown(db, {
  login: { basic: require('accountdown-basic') }
});

var opts = {
  login: { basic: { username: 'jDub', password: 'thisandthat' } },
  value: { bio: 'thisandthat' }
};

users.create('jDub', opts, function(e) {
  if (err) return console.error(err);
});