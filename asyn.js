function myFunction1(txt) {
    return new Promise((resolve,reject)=>{
        if (true) //switch to resolve or reject
        {
            t = Math.random()*1000;
            setTimeout(()=>{
                resolve(txt + " fun1 resolved in "+t);
            },t);
        } else {
            reject("fun1 rejected false no");
        }
    });
}

function myFunction2(txt) {
    return new Promise((resolve,reject)=>{
        if (true) //switch to resolve or reject
        {
            t = Math.random()*1000;
            setTimeout(()=>{
                resolve(txt + " fun2 resolved in "+t);
            },t);
        } else {
            reject("fun2 rejected false no");
        }
    });
}

function myFunction3(txt) {
    return new Promise((resolve,reject)=>{
        if (true) //switch to resolve or reject
        {
            t = Math.random()*1000;
            setTimeout(()=>{
                resolve(txt + " fun3 resolved in "+t);
            },t);
            
        } else {
            reject("fun3 rejected false no");
        }
    });
}

//Run in seq
async function callSync(){
    try {
        const first = await myFunction1("Hello : ");
        console.log("Done First : " + first);

        const sec = await myFunction2(first);
        console.log("Done sec : " + sec);

        const third = await myFunction3(sec);
        console.log("Done third " + third);

    } catch(ex){
        console.log(ex);
    }
}

callSync();

//Run all and only run this when all done
Promise.all([myFunction1, myFunction2, myFunction3])
    .then((data)=>{
        console.log("Done Done Done.."+ data);
    })

//Run a race
Promise.race([myFunction1, myFunction2, myFunction3])
    .then((data)=>{
        console.log("Shortest task run" + data);
    })