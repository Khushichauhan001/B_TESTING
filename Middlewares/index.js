//  const express =require('express');

//  const app= express();


// function isOldEnough(age){
//     if(age>=14){
//         return true ;
//     }
//     else {
//         return false ;
//     }
// }


// app.get("/ride2", function(req , res){
//     if(isOldEnough(req.query.age)){
//        res.json({
//         msg: "you have succesfully riden the ride 2 ",
//     });
//     }else {
//         res.status(411).json({
//             msg: "sorry under age",
//         });
//     }
    
//  });

//  app.get("/ride1", function(req , res){
//     if(isOldEnough(req.query.age)){
//        res.json({
//         msg: "you have succesfully riden the ride 1 ",
//     });
//     }else {
//         res.status(411).json({
//             msg: "sorry under age",
//         });
//     }
    
//  });  // search localhost:3000/ride1?age=30
 

//  app.listen(3000);





//now using middleware
  const express =require('express')
  const app= express()

  // no need for this in case of middlewares

//  function isOldEnough(age){
//      if(age>=14){
//          return true ;
//      }
//      else {
//          return false ;
//      }
//     } 

    function isOldEnoughMiddleware(req, res, next){
       const age = req.query.age ;
        if(age>=14){
        next();
     }
     else {
        res.json({
            msg: "sorry u are not of age yet",
        }) 
     }
    }

    // app.use(isOldEnoughMiddleware) 
    // agr ye likhnge toh fir ye app.get m isOldEnoughMiddleware nai use krenge ... sb ek br m hojyga ki app phle usekro isOldMid...
     
 app.get("/ride2", isOldEnoughMiddleware, function(req , res){
     
        res.json({
         msg: "you have succesfully riden the ride 2 ",
     });

    });
  app.get("/ride1", isOldEnoughMiddleware, function(req , res){
     
        res.json({
         msg: "you have succesfully riden the ride 1 ",
     });
  });  // search localhost:3000/ride1?age=30

  app.listen(3000);

 