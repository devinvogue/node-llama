"use strict";

const fs = require('fs');
const fileToBeWrittenTo = process.argv[2];
const content = process.argv[3];

fs.writeFile(fileToBeWrittenTo, content, err => {
    if(err) throw Error(`Error occurred while trying to write to file : ${err}`);

    console.log(`Content written to ${fileToBeWrittenTo}`);
});

