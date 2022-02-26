const path= require('path');
const fs =require('fs');
const solc=require('solc');

//find path
const inboxPath= path.resolve(__dirname,'contracts','Inbox.sol');

//read content of file
const source =fs.readFileSync(inboxPath,'utf8');

//compile  statement
 module.exports = solc.compile(source,1).contracts[':Inbox'];