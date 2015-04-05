level = require('level');
var db = level(process.argv[2], { valueEncoding: 'json' });
var JSONFile = require(process.argv[3]);

var operations = JSONFile.map(formatOperations);
db.batch(operations);

function formatOperations(row) {
  var key;
  if(row.type === 'user') key = row.name;
  else if(row.type === 'repo') key = row.user + '!' + row.name;

  return { type: 'put', key: key, value: row };
}
