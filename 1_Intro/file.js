const fs = require("fs"); //fs built in module
 
// sync
// fs.writeFileSync("./test.txt" , "Hey there!");


// Async
// fs.writeFileSync("./test.txt", "Hello world Async" , (err) => {})


// to read the file
const result1 = fs.readFileSync("./contact.txt", "utf-8")
console.log(result1);

// read without readFileSync 
// const result2 = fs.readFile("./contact.txt", "utf-8")
// console.log(result2);  // throws error 


// for this
fs.readFile("./contact.txt", "utf-8", (err, result1) => {
    if(err){
        console.log("error: " , err);
        
    }
    else {
        console.log(result1);
    }
});


// fs.appendFileSync("./test.txt" , new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt" , 'hey there222');