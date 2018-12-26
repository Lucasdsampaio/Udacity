var HDWalletProvider = require('truffle-hdwallet-provider');

var mnemonic = 'rich scale bunker pass cricket gravity before scene property tank first spy';

module.exports = {
  networks: { 
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: "*"
    }, 
    rinkeby: {
      provider: function() { 
        return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/50963389758548b2a61bdb98454156de') 
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
};