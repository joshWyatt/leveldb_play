var level = require('level');
var db = level(process.argv[2]);

db.createReadStream().on('data', function(chunk) {
  console.log(chunk.key + '=' + chunk.value);
});