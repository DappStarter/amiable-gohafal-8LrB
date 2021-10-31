require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note oval unfair gesture credit force genius'; 
let testAccounts = [
"0x0067b27f8329aa49c6f0d524fc4086322c7ffe5f401944dd1940987e3ec13ac0",
"0x7adbde33b7f9d08c864fc81e31282c92eff0e141b9597464f7175019858af8d3",
"0xe047f14629af26447c18e31e08104b3414f8d8830ac5e57736ace2f5611292e7",
"0x95c8766d5c215b829f35db0344feea0ea7fe3db3bcfb712555d36afd825e6085",
"0x68d92cedd7e10f7247329e5bafebb02cc5ed4fcb0b12bfa427bc56b3b6b6c191",
"0x5979c4bb2ce1f6cd49afa28d529386aa01c44905f282ffab5178c56b95c8f068",
"0x1b0df14fcd3a43b2e8e875d2590fd5d3e0531715763dafad8e3c01d1a9ecafe3",
"0xd50c9f38a51f1b016a544a12fea8980b38902ee02797a3b08bda2182eb0c075d",
"0x1ee5a185f182ec536899df0b1f4992a56d1bfa7519adb66bc8669b9e0670c5c0",
"0x2298ed2f4d7de12857eb674743625d369ef061c55cf8809fa49ba0856cb3ae56"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

