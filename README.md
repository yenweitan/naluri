# Naluri
Naluri Coding Challenge

# The problem
The Naluri space project is investigating how we could model the solar system. As a first step
we’d like to calculate the circumference of the sun.|

# The solution
1. Create an HTTP server that is capable of
a. Calculating Pi to increasing accuracy e.g. 3, 3.1, 3.14, 3.141, 3.1415… etc.
b. Everytime the server has calculated the next decimal precision, it should store
the most accurate value
c. When the server is queried via an HTTP GET request, it will respond with the
most accurate value that the server has calculated
2. Create a webapp that displays
a. The servers’ current known value of Pi
b. The circumference of the sun

# Consider the following:
1. Please calculate Pi algorithmically by using one of the known formulas
2. Initialize a git repo when you start your project and include the .git folder in your
submission
3. Feel free to use third party libraries in your submission for everything but the Pi
calculation



# Instructions to start the application
1. Clone repository
    a. Backend: cd backend, npm install, node index.js
    b. Frontend: cd frontend, npm install, npm start

# Post challenge completion thoughts
1. Limitation with using math.PI as the reference PI comparision value (3.141592653589793), which limits accuracy on increasing decimal points. A potential idea perhaps is having a constant file that contains the full pi value with better accuracy being used for accuracy comparisons perhaps

2. Better job at segregating backend structure perhaps with the different functions (index/server.js file calling dedicated pi or circumference files that contain calculation logic)

3. Rooms for improvement
* Venture into visualizing the calculation of pi in the future (d3js perhaps), but first attempt is prioritizing functionality first.
