#!/usr/bin/env node

const fs = require('fs');
const pluralize = require('pluralize');
const FileEdit = require('../utils/file_edit');

class Plugin {

    static generate(pluginName) {
        pluginName = pluralize.plural(pluginName);
        const pluginNameCapitalized = pluginName.charAt(0).toUpperCase() + pluginName.slice(1);
        const pluginNameLowered = pluginName.toLowerCase();

        fs.readFile('./snippets/plugin', function(err, data) {
            data = data.toString().split('<PluginNameCapitalized>').join(pluginNameCapitalized);
            data = data.toString().split('<PluginNameLowered>').join(pluginNameLowered);
            fs.writeFileSync(`plugins/${pluginNameLowered}.js`, data.toString());
        });

        console.log('Plugin created!');
    }

    static undo(modelName) {
        const pluginNameLowered = pluralize.plural(modelName.toLowerCase());
        fs.unlinkSync(`plugins/${pluginNameLowered}.js`);

        console.log('Plugin removed!');
    }

    static register(modelName) {
        const fileName = 'index.js';
        const pluginName = pluralize.plural(modelName);
        const searchText = 'server.register';
        const text = `\t\t{ plugin: require(\'./plugins/${pluginName}\') },\n`;
        
        FileEdit.injectTextToFile(fileName, searchText, text);

        console.log('Plugin registered!');
    }

    static unregister(modelName) {
        const fileName = 'index.js';
        const pluginName = pluralize.plural(modelName);
        const searchText = `plugin: require(\'./plugins/${pluginName}\')`;
        
        FileEdit.removeTextFromFile(fileName, searchText);

        console.log('Plugin unregistered!');
    }

}

module.exports = Plugin;