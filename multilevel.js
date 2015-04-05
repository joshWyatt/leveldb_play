var multilevel = require('multilevel');
var db = multilevel.client();
var connection = require('net').connect(4545);

connection.pipe(db.createRpcStream()).pipe(connection);

db.get('multilevelmeup', function(e, value){
  if (e) throw e;
  console.log(value);
  connection.end();
});