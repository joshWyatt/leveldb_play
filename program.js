var level = require('level');
var dbPath = __dirname + './';
db = level(dbPath);

for(var i = 0; i <= 100; i++) {
  var key = 'key' + i;
  db.get(key, function(e, value) {
    if (!e) solutionPrinter(key, value);
  });
}

function solutionPrinter(key, value) {
  return console.log(key + '=' + value);
}