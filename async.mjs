function samplePromise(){
    return Promise.resolve("Syukron Jamil");
}


const name = await samplePromise();
console.log(name);

