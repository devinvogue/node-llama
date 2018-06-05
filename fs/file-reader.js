"use strict";

const fs = require('fs');
const fileToBeRead = process.argv[2];

if(!fileToBeRead) throw Error('Please specify file to be read');

fs.readFile(fileToBeRead, 'utf-8', (err, content) => {
    if(err) throw Error(`Error occurred while trying to read file : ${err}`);

    console.log(content);
});
