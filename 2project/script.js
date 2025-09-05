 const express = require('express');
    const app = express();
    const port = 3000;

    //middleware
    app.use((req, res, next) => {
        console.log("hello from middleware");
        next();
    }
    );

    app.get('/', (req, res) => {
        res.send('Hello World 2!');
    }
    );


    app.get('/profile', (req, res) => {
        res.send('Hello World  from profiles secrion !');
    }
    );

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    }
    );

    // To run this script, ensure you have Node.js installed and execute:
    // npm install express
    // node script.js
    // Then open your browser and navigate to http://localhost:3000
    // This will start a simple web server that responds with "Hello World!" at the root URL.
    // This script demonstrates a basic web server setup using Express.js.