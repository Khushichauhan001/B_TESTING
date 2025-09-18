// normal tokens code 

const express = require("express");

const app = express();
app.use(express.json());

const user=[];

function generateTokens(){
    // Math.random();
    let options =['a' , 'b','c','d','e','f','A','B','C','D','E','F','1','2','3','4','5','6'];

    let tokens = "";
    for(let i=0 ;i< 32 ;i++) {   // here i choose the length of taken 32 
        tokens += options[Math.floor(Math.random() * options.length)]
    }
    return tokens ; 
}

app.post("/signup"  , function(req , res){
   const username = req.body.username ;
   const password = req.body.password ;

//    if(username.length < 5){
//     res.json({
//         message: "please enter atleast 7 length password",
//     })
//    }



//    if(user.find(u => u.username === username)){
//    res.json({
//     message : " you have already logged in  , please try again with different email",
//    })
//    return 
//    }
     user.push({
     username: username,
     password: password 
})


  res.json({
    message: "you are signed up "
  })

  console.log(user);
})    



app.post("/signin" , function(req , res){

    const username = req.body.username; 
    const password = req.body.password ;

    // const foundUser = user.find(function(u){
    //     if(u.username == username){
    //         return true ;
    //     }
    //     else {
    //         return false ;  
    //     }
    // })

    let foundUser= null ;
   for(let i=0 ;i< user.length  ;i++){
    if(user[i].username == username && user[i].password == password){
        foundUser = user[i];
    }
   }


   if(foundUser){
    const token = generateTokens();
    foundUser.token = token ;
    res.json({
        message: token 
    })
   }
   else {
    res.status(403).send({
        message: "invalid username and password"
    })
   }

   console.log(user);
});

app.get("/me", function(req,res){
    const token = req.headers.token
    let foundUser = null ;

    for(let i=0 ;i<user.length ;i++){
        if( user[i].token == token){
            foundUser = user[i]
        }
    }

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password  
        });
    }
   else {
    res.status(401).json({
        message: "token invalid"
    });
}
});

app.listen(3004);