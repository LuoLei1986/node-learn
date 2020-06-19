'use strict'

var fs =  require('fs');

var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function(error){
    if(error){
        console.log(error);
    }else{
        console.log('ok');
    }
});