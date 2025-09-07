 // creating an http server
 // express
 //node default library => no(like fs can use directlybut to use this we need to install this firstly )

 const express= require("express");

 const app = express(); //creating the hospital

var user=[{
    name : 'Khushi',
    course: 'btech',
   kidneys: [{
     healthy: true 
   }]
}];

// console.log(user[0]);

// app.get('/about' , function(req, res){
// console.log("home page");
// res.send("response send home page ");
// })


app.get('/about' , function(req, res){
const khushiKidneys = user[0].kidneys;
// console.log(khushiKid);
const noOfKidneys = khushiKidneys.length ;
let numberOfHealthyKidney =0 ;
for(let i=0 ;i< khushiKidneys.length;i++){
    if(khushiKidneys[i].healthy){
        numberOfHealthyKidney= numberOfHealthyKidney+1;
    }
}

const noOfUnhealthyKidneys = noOfKidneys - numberOfHealthyKidney; 
res.json({
    khushiKidneys,
    numberOfHealthyKidney,
    noOfUnhealthyKidneys
})
})


app.post('/about' , function(req, res){
console.log("about page post operation");
res.send("response send about page post operation  ");
})


app.put('/about' , function(req, res){
console.log("about page");
res.send("response send about page  ");
})


app.delete('/about' , function(req, res){
console.log("about page");
res.send("response send about page  ");
})

 app.listen(3000);