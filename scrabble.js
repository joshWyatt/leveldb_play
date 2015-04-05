exports.init = function (db, words, callback) {
  var operations = words.map(formatOperations);
  db.batch(operations, callback);

  function formatOperations(word) {
    var formattedKey = word.length + '!' + word;
    return { type: 'put', key: formattedKey, value: word };
  }
};

exports.query = function (db, word, callback) {
  var rangeEnd;
  word = word.length + '!' + word;
  if(word.indexOf('*') >= 0) rangeEnd = word.replace(/\*+/, '\xff');
  else rangeEnd = word + '\xff';

  var matches = [];
  db.createReadStream({ start: word, end: rangeEnd})
    .on('data', function(data) {
      matches.push(data.value);
    })
    .on('error', function(error) {
      if(callback) {
        callback(error);
        callback = null;
      }
    })
    .on('end', function() {
      callback(null, matches);
    });
};