var http = require('http');
var fs = require('fs');

// without using pipes we are manually listening to 'data' event but alternative 
//is pipes (Pipes writes automatically to stream when new chunk of data is
//available that is read from readStream. )

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// we are piping readable streams to writeable streams
//pipe() method can only be used with readStream

//myReadStream.pipe(myWriteStream);  //that's it

var server = http.createServer((req , res) => {
  console.log('request is made:'+req.url);
  res.writeHead(200 , {'Content-Type':'text/plain'});

 
  // response is our writeable streams and request is a readable streams
  myReadStream.pipe(res);

});

server.listen(9000 , ()=>{
 console.log('Server running...');
});