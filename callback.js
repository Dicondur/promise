function myFunction(callback) {
    let name = 'oldname';
    console.log("Started here, name is: " + name);

    //Long timed task here
    setTimeout(()=>{
        name ='newname';
        return callback(null, name);
        // return x;
    },3000);
}

myFunction((err,data)=>{
    console.log("Call back started, name is: "+ data);
})