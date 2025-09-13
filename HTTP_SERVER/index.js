//   const http = require("http");
//   const myServer = http.createServer((req, res)=>{
//       console.log("new request received");
//       res.end("hello from server ");
//   });

//   myServer.listen(8001, () => console.log("server started"));



// const http = require("http");
// const fs = require("fs");
//   const myServer = http.createServer((req, res)=>{
//       const log = `${Date.now()}: New Request Received\n`;
//       fs.appendFile("log.txt", log, (err, data)=> {
//          res.end("hello from server again");
//       });
//   });

//   myServer.listen(8001, () => console.log("server started"));


  // isse ek log file bn jaygi and har br koi requestaane pr wo log.txt file m data store kregi ...









  // assignment

  const express = require("express");
  const app = express();

  app.get("/sum" , function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
      ans : a + b
    })
  });

  app.get("/sub" , function(req, res){
    const a = parseInt(req.query.a) ;
    const b = parseInt(req.query.b) ;

    res.json({
      ans : a-b 
    })
  });

  app.get("/mul" , function(req, res){
     const a = req.query.a ;
     const b = req.query.b ;
      res.json({
        ans : a*b 
      })
  });

  app.get("/div" , function(req , res){
   const a = req.query.a;
   const b = req.query.b;

   res.json({
    ans : a/b
   })
  });

  app.listen(3001);
    