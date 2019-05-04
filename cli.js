#!/usr/bin/env node

const Init = require('./logic/init');
const DbMongo = require('./logic/db_mongo');
const Model = require('./logic/model');
const Plugin = require('./logic/plugin');
const Service = require('./logic/service');

const [,, ...args] = process.argv;


if (args[0] != 'init' && args[0] != 'scaffold' && args[0] != 'generate' && args[0] != 'remove') {
    console.log('Invalid options');
    return;    
}

if (args[0] == 'init') {
    Init.generate();
}

if (args[0] == 'generate') {
    if (args[1] == 'db:mongo') {
        DbMongo.generate();
    }
}

if (args[0] == 'scaffold') {
    if (args[1] == 'model' && args[2] != undefined) {
        const attributes = args.slice(3);
        Model.generate(args[2], attributes);
    } else if (args[1] == 'plugin' && args[2] != undefined) {
        Plugin.generate(args[2]);
        Plugin.register(args[2]);
    } else if (args[1] == 'service' && args[2] != undefined) {
        Service.generate(args[2]);
    } else if (args[1] != undefined) {
        const attributes = args.slice(2);
        Model.generate(args[1], attributes);
        Service.generate(args[1]);
        Plugin.generate(args[1]);
        Plugin.register(args[1]);
    }
}

if (args[0] == 'remove') {
    if (args[1] == 'model' && args[2] != undefined) {
        Model.undo(args[2]);
    } else if (args[1] == 'plugin' && args[2] != undefined) {
        Plugin.undo(args[2]);
        Plugin.unregister(args[2]);
    } else if (args[1] == 'service' && args[2] != undefined) {
        Service.undo(args[2]);
    } else if (args[1] != undefined) {
        Model.undo(args[1]);
        Service.undo(args[1]);
        Plugin.undo(args[1]);
        Plugin.unregister(args[1]);
    }
}