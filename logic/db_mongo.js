#!/usr/bin/env node

const fs = require('fs');

class DbMongo {

    static generate() {
        fs.readFile('snippets/db_mongo', function(err, data) {
            fs.writeFileSync(`config/database.js`, data.toString());
        });
    
        console.log('Database config created!');
    }

    static undo() {
        fs.unlinkSync('config/database.js');

        console.log('Removed database config!');
    }

}

module.exports = DbMongo;