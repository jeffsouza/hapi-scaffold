const fs = require('fs');
const readline = require('readline');

class FileEdit {

    static async injectTextToFile(fileName, searchText, text) {
        var result = '';

        var lineReader = readline.createInterface({
            input: fs.createReadStream(fileName)
        });

        for await (const line of lineReader) {
            if (line.indexOf(searchText) != -1) {
                result += `${line}\n`;
                result += text;
            } else {
                result += `${line}\n`;
            }
        }

        fs.writeFileSync(fileName, result);
    }

    static async removeTextFromFile(fileName, searchText) {
        var result = '';

        var lineReader = readline.createInterface({
            input: fs.createReadStream(fileName)
        });

        for await (const line of lineReader) {
            if (line.indexOf(searchText) == -1) {
                result += `${line}\n`;
            }
        }

        fs.writeFileSync(fileName, result);
    }

}

module.exports = FileEdit;