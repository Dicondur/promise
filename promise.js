function myFunction1(txt) {
    return new Promise((resolve,reject)=>{
        if (true) //switch to resolve or reject
        {
            resolve( txt + "fun1 resolved true yes");
        } else {
            reject("fun1 rejected false no");
        }
    });
}

function myFunction2(txt) {
    return new Promise((resolve,reject)=>{
        if (true) //switch to resolve or reject
        {
            resolve(txt + "fun2 resolved true yes");
        } else {
            reject("fun2 rejected false no");
        }
    });
}

function myFunction3(txt) {
    return new Promise((resolve,reject)=>{
        if (true) //switch to resolve or reject
        {
            resolve(txt + "fun3 resolved true yes");
        } else {
            reject("fun3 rejected false no");
        }
    });
}

//To Run in seq
myFunction1("Hello")
    .then(out2 => myFunction2(out2))
    .then(out3 => myFunction3(out3))
    .then((complete)=>{
        console.log("All func ran: " + complete)})
    .catch((err)=>{
        console.log("Error in any step", err)
    })




//     let name = 'oldname';
//     console.log("Started here, name is: " + name);

//     //Long timed task here
//     setTimeout(()=>{
//         name ='newname';
//         return callback(null, name);
//         // return x;
//     },3000);
// }

// myFunction((err,data)=>{
//     console.log("Call back started, name is: "+ data);
// })