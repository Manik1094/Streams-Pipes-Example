var http = require('http');
var fs = require('fs');


// we first read the data from readMe.txt and then writing that chunks of 
//data in writeMe.txt file
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');


//Basically we are listening to 'data' event

// and everytime we receive that chunk , we fire a function to display that chunk.
myReadStream.on('data' , function(chunk){  
    console.log('New chunk received:');
   myWriteStream.write(chunk);  // writing that chunk of data in writeMe.txt
});

//'on' basically binds the event to an object. in this case 'myReadStream'
