var male = require('genoset-male');
var fs = require('fs');
var path = require('path');
var es = require('event-stream');
var JSONStream = require('JSONStream');

var jsonStream = fs.createReadStream(path.join(__dirname, "./data/markDavis.json"));

var query = male();
var genoStream = query.stream();

jsonStream
  .pipe(JSONStream.parse('*'))
  .pipe(genoStream);

var count = 0;
genoStream.on('data', function(snp) {
  console.log('Analyzed', ++count, 'SNPs');
});

genoStream.on('end', function() {
  console.log("There are", query.matches().length, "matches for genoset 144");
  console.log("There is a", query.percentage(), "percent chance that genoset matches");
});
