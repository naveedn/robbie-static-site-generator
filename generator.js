
const templatesFolder = './templates/';
const dataFolder = './data/';
const fs = require('fs').promises;
const path = require('path');

const data = {};
const htmlFiles = {};

fs.readdir(dataFolder)
    .then(files => {
        files.forEach(file => {
            let filename = path.basename(file, '.json')
            data[filename] = require(dataFolder + file);
        })

        return data
    })
    .then(() => fs.readdir(templatesFolder))
    .then(files => {
        files.forEach(file => {
           fs.readFile(templatesFolder + file, 'utf-8')
                .then(output => {
                    function blah(strings, data) {
                        let str0 = strings[0]
                        let str1 = strings[1]


                    }
                    let filename = path.basename(file, '.html')
                    for (let prop in data[filename]) {
                        val = data[filename][prop]
                        eval('var ' + prop + '= val')
                    }

                    htmlOutput = eval('`' + output + '`')
                    console.log(htmlOutput)
                    htmlFiles[filename] = htmlOutput
                })
        })
    })
    .then(() => {
        console.log(data)
        console.log(htmlFiles)
    })
    .catch(err => {
      console.log('oh no!!!', err);
    });
