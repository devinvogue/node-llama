"use strict";

const fs = require('fs');
const spawnChildProcess = require('child_process').spawn;
const fileToBeWatched = process.argv[2];

if(!fileToBeWatched){
    throw Error('Please specify file to be watched');
}

fs.watch(fileToBeWatched, () => {
    let ls = spawnChildProcess('ls', ['-lh', fileToBeWatched]);

    ls.stdout.on('data',  data => {
        console.log(data.toString());
    });


    ls.stderr.on('data', data => {
        console.log(`Error occured : ${data.toString()}`)
    });

    ls.on('close', code => {
        console.log(`Our child process is closing. Closing code is ${code}`)
    })

});

console.log(`Watching ${fileToBeWatched} for changes`);
