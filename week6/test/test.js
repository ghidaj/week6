const Insurance = artifacts.require("Insurance");



contract("Insurance", async function(accounts){

    it(
        "should add a insurance", async function(){
            let instance = await Insurance.deployed()
            await instance.addProduct("10","House", web3.utils.toWei('10', 'ether'), {from: accounts[0]});
    });

    it(
        "is for sale", async function(){
            let instance = await Insurance.deployed()
            await instance.addProduct("10","House", web3.utils.toWei('10', 'ether'), {from: accounts[0]});
            let getProduct = await instance.fatch(1);
            assert(getProduct.offered === true, "Error: the insurance wasn't setup for sale");
    });

    





});