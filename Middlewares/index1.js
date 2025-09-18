// assignment  : Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

  const express = require("express");
  const app = express();

  let requestCount =0 ;
  function requestIncrease(req , res , next){
    requestCount= requestCount+1;
    console.log("total num of req = " + requestCount);
    next();
  }

  function testMiddleware(re , res , next){
    console.log("second middleware kam kr rha h ");
    next();
  }

  function realSumHandler(req , res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
      ans : a + b
    })
  }
//logs the method , timestamp and the url 

  function loggermiddleware(req , res , next){
    console.log("method is" + req.method);
    // console.log("method is" + req.url);
    console.log("method is" + req.hostname);
    console.log(new Date());

    next();
  }
//   app.get("/sum" , function(req, res){
    
//   });   instead of this we can write 

// app.get("/sum" , requestIncrease , realSumHandler);

   app.use(requestIncrease );
   app.use(loggermiddleware);

   app.get("/sum" , realSumHandler);
   app.get("/mul" , realSumHandler);
   app.get("/div" , realSumHandler);
     app.listen(3000);

  //output: 
  //firstly sun this onlocalhost as localhost:3001/sum?a=2&b=4 
  // then u can see the total no of requests in the terminal here 
