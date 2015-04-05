// var level = require('level');
// var fs = require('fs');
// var db = level(process.argv[2]);
// var file = process.argv[3];

// var data = fs.readFileSync(file, 'utf-8').split('\n');
// var operations = data.map(batchOperations);
// db.batch(operations, batchHandler);

// function batchOperations(line) {
//   line = line.split(',');
//   return { type: line[0], key: line[1], value: line[2] };
// }

// function batchHandler(e) {
//   if (e) throw e;
//   db.close();
// }

var level = require('level');
var db = level(process.argv[2]);
var fs = require('fs');
var filePath = process.argv[3];

var data = fs.readFileSync(filePath, 'utf-8').split('\n');
var operations = data.map(formatOperations);
db.batch(operations, batchHandler);

function formatOperations(line) {
  line = line.split(',');
  return { type: line[0], key: line[1], value: line[2] };
}

function batchHandler(e) {
  if (e) throw e;
  db.close();
}