const HDWalletProvider= require('truffle-wallet-provider');
const Web3= require('web3');
const{interface,bytecode}=require('./compile')

const provider = new HDWalletProvider(
    'virtual first dawn mail wire helmet buffalo print pencil where allow scatter',
    // url of network to connect to
    'https://rinkeby.infura.io/v3/2d040a93bf9143c0815bd73f1f76ac85'
)