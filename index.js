const express = require("express");
var cors = require('cors');
var app = express();
app.use(cors());

//just to ping server to check on root and running
app.get('/', (req, res) => {
  res.json({
    message: 'Ping server check if ok',
    pid: process.pid
  });
});

//CORS protection on browser for FE client
//to prevent gaining further access to endpoint information
var whitelist = ['http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

var π = Math.PI;

app.get("/get-numbers", cors(corsOptions), function(request,response){
  console.log("count: ", count);
  console.log("raw pi: ", pi);
  console.log("accuracy: ", getAccuracy(π, pi), " digits (including whole number and 1 last decimal)")
  response.send({valuePi: pi.toFixed(getAccuracy(π, pi) - 2)});
});

var pi = 3;
var x = 2;
var count = 1;

// Nilakantha series algorithm 
// π = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
function update() {
  if (count % 2) {
    pi = pi + (4/(x * (x+1) * (x+2)));
  } else {
    pi = pi - (4/(x * (x+1) * (x+2)));
  }
  x += 2;
  count ++;
}

setInterval(update, 5);

function getAccuracy(a, b) {
  a = a.toString().replace(".", "");
  b = b.toString().replace(".", "");
  for (var i = 0; i < Math.min(a.length, b.length); i++) {
    if (a.charAt(i) !== b.charAt(i)) { return i; }
  }
  if (a.length !== b.length) { return Math.min(a.length, b.length); }
  return -1;
}

app.listen(3080, function () {
  console.log("Started application on port %d", 3080);
});