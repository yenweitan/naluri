const express = require("express");
var cors = require('cors');
var app = express();
app.use(cors());

const hrstart = process.hrtime()
const hrend = process.hrtime(hrstart)

// just to ping the server to check on root /
app.get('/', (req, res) => {
    res.json({
        message: 'Ping server to check if ok',
            pid: process.pid
    });
});


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


//variables
var pi = 3;
var x = 2;
var count = 1;
var sun = 0;
var radius = 696340; // in km
//using math.pi instead of pure txt file for now first
var π = Math.PI;


app.get("/get-pi", cors(corsOptions), function(req,res){
  console.log("count: ", count);
  console.log("whole pi: ", pi);
  console.log("accuracy: ", isAccurate(π, pi), " digits (including whole number and 1 last decimal)")
  console.info(`execution time (hr): ${hrend[0]}s ${hrend[1] / 1000000}ms`)

  //toFixed value based on accuracy value deducting whole num and last decimal
  res.send({valuePi: pi.toFixed(isAccurate(π, pi) - 2)});
});

app.get("/get-sun", cors(corsOptions), function(req,res){
  console.log("circumference of the sun: ", sun);
  res.send({valueSun: sun.toFixed()}); 
});

// Nilakantha series algorithm 
// π = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
function calculatePi() {
  if (count % 2) {
    pi = pi + (4/(x * (x+1) * (x+2)));
  } else {
    pi = pi - (4/(x * (x+1) * (x+2)));
  }
  x += 2;
  count ++;
}

setInterval(calculatePi, 50);

//Circumference of the sun
//2 * pi * radius
function calculateSun() {
  return sun = 2 * pi * radius;
}

setInterval(calculateSun, 50);

function isAccurate(a, b) {
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