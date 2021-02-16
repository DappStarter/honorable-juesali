require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net pull install clog success suffer'; 
let testAccounts = [
"0xc7b11569c06141f8f14ba7579231dbbf6e043af3487ede8da297a3967e6015a5",
"0xfe5a340476073643864d57ee6dd0b4678de49c120a95c1bcbb584ae52353bd76",
"0xea6f14b2e1740968883981dc2f90fbee34b142e92165fa7a6f06eb364625cb26",
"0x71c676dafd479dc83b1b6c84fbf45f1fcd9d1cd74bf154e0bd9de9d0b1bf053f",
"0xcd5dd3e5a6cdc72ba72b3096564736c45293f2fbad37020379a708ef414c8e2c",
"0xe0a0efb82116846d4171932540b0b9a9be2584317cc4c85357bc3d9a54f55c1f",
"0xe09b88e68ced879fd5f90152f7fa099b8ec03c23ca9c02262f2e2e99f9f8f885",
"0x8ea769d2eaf85bfae43f2fd3684a2e54814badb1cb858ea2da0b920464ba784e",
"0x0a82d3c5af00737462ff45f87c7260c8c7865f9bcf8acadae23be91afd6e235c",
"0xd7063ef6059665242d46e371186c0ab98888a1386e89ebc66dbaf6ee131695a2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
