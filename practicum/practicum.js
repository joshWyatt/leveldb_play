var level = require('level');
var fs = require('fs');
var path = require('path');

var db = level(path.resolve('practicum.db'), { valueEncoding: 'json' });
var json = require(path.resolve('init.json'));

var operations = json.map(formatOperations);
db.batch(operations, fetchOperations);

function formatOperations(student) {
  return {type: 'put', key: student.name, value: student };
}

function fetchOperations(e) {
  if(e) throw e;
  db.get('josh', function(e, value) {
    if(e) throw e;
    console.log(value);
  });
}