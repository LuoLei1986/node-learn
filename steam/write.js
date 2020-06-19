'use strict'

var fs = require('fs');

var  ws1 = fs.createWriteStream('output.txt', 'utf-8');
ws1.write('use stream wirte the data.. \n');
ws1.write('end');
ws1.end();


var  ws1 = fs.createWriteStream('output.txt2');
ws1.write(new Buffer.from('use stream wirte the data.. \n', 'utf-8'));
ws1.write(new Buffer.from('end', 'utf-8'));
ws1.end();