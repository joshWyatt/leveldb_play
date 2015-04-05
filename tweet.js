module.exports = function(db, date, cb) {
  var tweets = [];
  db.createReadStream({ start: date, end: date + '\xff'} )
    .on('data', function(data) {
      tweets.push(data.value);
    })
    .on('error', function(error) {
      if(cb) {
        cb(error);
        cb = null;
      }
    })
    .on('end', function() {
      cb(null, tweets);
    });
};