
var webpack = require("webpack");
var wpConfig = require('./webpack.config');
const fs = require('fs-extra');
var archiver = require('archiver');

// returns a Compiler instance
webpack(wpConfig, function(err, stats) {
  if(err){
    return console.error('Error: ' + JSON.stringify(err));
  }
  //copy images file
  copyImages().then(function () {
    //zip file
    zipDist();
  });
});

function copyImages() {
  return fs.copy('./src/images/favicons', './dist/images/favicons')
    .then(() => console.log('Copy images successfully!'))
    .catch(err => console.error(err))
}

function zipDist() {
  var archive = archiver.create('zip', {});
  var output = fs.createWriteStream(__dirname + '/dist.zip');
  // pipe archive data to the file
  archive.pipe(output);

  // listen for all archive data to be written
  output.on('close', function() {
    console.log((archive.pointer()/(1048576)).toFixed(2) + ' total mb');
    console.log('Build successfully!');
  });

  // good practice to catch this error explicitly
    archive.on('error', function(err) {
      throw err;
    });
  archive.glob('./dist/**/*.*');
  archive.finalize();
}

