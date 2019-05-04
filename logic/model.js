#!/usr/bin/env node

const fs = require('fs');
const formatAttributes = require('../utils/format_attributes');

class Model {

    static generate(modelName, attributes) {
        const modelNameCapitalized = modelName.charAt(0).toUpperCase() + modelName.slice(1);
        const modelNameLowered = modelName.toLowerCase();

        if (!fs.existsSync('./models')){
            fs.mkdirSync('./models');
        }

        fs.readFile('snippets/model', function(err, data) {
            attributes = formatAttributes(attributes);
            data = data.toString().split('<ModelName>').join(modelNameCapitalized);
            data = data.toString().split('<Attributes>').join(attributes);
            fs.writeFileSync(`models/${modelNameLowered}.js`, data.toString());
        });

        console.log('Model created!');
    }

    static undo(modelName) {
        const modelNameLowered = modelName.toLowerCase();
        fs.unlinkSync(`models/${modelNameLowered}.js`);

        console.log('Model removed!');
    }

}

module.exports = Model;