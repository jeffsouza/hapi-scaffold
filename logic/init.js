#!/usr/bin/env node

const fs = require('fs-extra');

const folders = ['./config', './models', './routes', './services', './controllers'];

class Init {

    static generate() {
        fs.readFile('snippets/index', function(err, data) {
            fs.writeFileSync(`index.js`, data.toString());
        });

        for (var i = 0; i < folders.length; i++) {
            if (!fs.existsSync(folders[i])){
                fs.mkdirSync(folders[i]);
            }
        }
    
        console.log('Initialized!');
    }

    static undo() {
        fs.unlinkSync('index.js');

        for (var i = 0; i < folders.length; i++) {
            fs.removeSync(folders[i]);
        }

        console.log('Destroyed!');
    }

}

module.exports = Init;