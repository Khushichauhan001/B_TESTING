// const fs = require('fs');
// fs.readFile("a.txt", "utf-8", (err, data) => {
//          console.log(data);
// })

//  import express from 'express'
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)