#!/usr/bin/env node

const fs = require('fs');

class Init {

    static generate() {
        fs.readFile('snippets/index', function(err, data) {
            fs.writeFileSync(`index.js`, data.toString());
        });
    
        console.log('Initialized!');
    }

    static undo() {
        fs.unlinkSync('index.js');

        console.log('Removed init!');
    }

}

module.exports = Init;