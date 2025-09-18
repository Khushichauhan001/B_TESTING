// assignment  : Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

  const express = require("express");

  //step 2(i) can also be : 
  const bodyParser = require("body-parser");
  const app = express();
  //then after 2(i)
  app.use(bodyParser.json());



 //step 2   // OR use bodyparser in above line 
 app.use(express.json());   // why we use .json() bc it returns a functions that why i use ()
 
   app.post("/sum" ,function(req,res){
    //step 1 
   console.log(req.body);  //but it donot give you data if you only write this becasue aapko ek middleware upar hi call krna pdega jo btayga ki ye json h otherwise ur browser confuse 
   const a = parseInt(req.body.a);
   const b = parseInt(req.body.b);

   res.json({
    ans: a+b,
   });
   
   });

   app.listen(3000);
  