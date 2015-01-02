var dna = require('dna2json');
var JSONStream = require('JSONStream');
var fs = require('fs');

fs.createReadStream("./data/markDavis.txt")
  .pipe(dna.createParser())
  .pipe(JSONStream.stringify())
  .pipe(fs.createWriteStream("./data/markDavis.json"));
