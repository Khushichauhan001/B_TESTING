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
app.use(express.json());

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
    noOfKidneys,
    numberOfHealthyKidney,
    noOfUnhealthyKidneys
})
})


app.post('/about' , function(req, res){
const isHealthy = req.body.isHealthy;
user[0].kidneys.push({
    healthy: isHealthy
})
res.json({
    msg: "DONE!" 
})
})


app.put('/about' , function(req, res){   // doess work good 
for(let i=0;i<user[0].kidneys.length ;i++){
    user[0].kidneys[i].healthy = false ;
}
 res.json({});// dedo khali koi prblm ni hogi ...even dena hi pdega otherwise , postman never know ki yes request has been ended 
})

//removing all unhealthy kidney 
app.delete('/about' , function(req, res){
 const newKidneys = [];
 for(let i=0;i<user[0].kidneys.length ;i++){
   if(user[0].kidneys[i].healthy){
    newKidneys.push({
        healthy: true 
    })
   }
}
user[0].kidneys = newKidneys;
 res.json({msg: "doneeeee"});// dedo khali koi prblm ni hogi ...even dena hi pdega otherwise , postman never know ki yes request has been ended 
})

 app.listen(3000);