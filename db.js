var levelup = require('levelup');
// var db = levelup('/mydb.db');
var db = levelup(process.argv[2]);

var i = 0;
while(i < 100) fetchKey(++i);

function fetchKey(i) {
  var key = 'key' + i;
  db.get(key, getHandler(key, logResult));
}

function getHandler(key, cb) {
  return function(e, value) {
    if (e && !e.notFound) throw e;
    value && cb(key, value);
  };
}

function logResult(key, value) {
  console.log(key + '=' + value);
}