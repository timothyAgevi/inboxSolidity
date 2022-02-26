const assert = require('assert');
const ganache= require('ganache-cli');
const Web3 =require('web3');// constructor function
const web3 =new Web3(ganache.provider());//instance of web3
const {interface,bytecode}= require('../compile')

// testing example line 6-28
// class Car{
//     park(){
//         return 'stopped';
//     }
//     drive(){
//         return 'vroom';
//     }
// }
// let car;
// beforeEach( ()=>{
//      car = new Car();
// })
// describe('Car',()=>{
//     it('can park',()=>{
        
//         assert.equal(car.park(),'stopped')
//     })
//     it('can drive',()=>{
        
//         assert.equal(car.drive(),'vroom')
//     })
// });
let accounts;
let inbox;
beforeEach( async ()=>{
    //get a list of all acounts
   accounts = await web3.eth.getAccounts()
   
    // Use one of those acc to deploy
inbox= await new web3.eth.Contract(JSON.parse(interface))//tells web3 which mwethods the contract has
.deploy({data:bytecode,arguments:['hi there !']})//deploy new copy of this contract
.send({ from:accounts[0],gas:'1000000'})//send transaction that creates his contract


    //the contract
})

describe('Inbox',()=>{
    it('deploys a contract',()=>{
        assert.ok(inbox.options.address);//checkif .send works address undefined
    });
     it('has a default message',async ()=>{
         const message = await inbox.methods.message().call()
     })  //.message() -modify arguments passed to this function
     //-.call()-modify  how exactly  function gets called
})