module.exports = function(db, date, cb) {
  var count = 0;
  db.createReadStream({start: date})
    .on('data', function(data) {
      count++;
    })
    .on('error', function(error) {
      if(cb) {
        cb(error);
        cb = null;
      }
    })
    .on('end', function() {
      if(cb) {
        cb(null, count);
        cb = null;
      }
    });
};