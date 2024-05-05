var testFolder = '/Users/minkyunghwi/Nodejs/data';
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})
