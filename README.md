# Homework 18: Workout Tracker

![Github license](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Description

A workout tracker that allows users to input and monitor their daily workout. Users can input name, type, weight, sets, reps, and duration of their exercises. If the exercise is a cardio exercise, the user is also able to track the distance they have traveled.

Users can add exercises to the most recent workout plan, as well as to a new workout plan.

On the 'stats' page, users can view the combined weight of multiple exercises from the past seven workouts as well as the total duration of each workout.

The HTML, Javascript and CSS enhanced front-end is coupled with a back-end that uses a Mongo database with a Mongoose schema, with the routes handled by Express. The MongoDB aggregate function is used to dynamically add up and return the total duration for each workout. 

It has been deployed on Heroku, with the assistance of MongoDB Atlas.

Screenshots of the app are also included below.


## Installation

The app works in any browser at the deployed link below.

However, to install the project please clone the repo from GitHub and use the following package manager:

- enter 'npm init' and 'npm i' in the terminal to install all packages.

- Or please ensure all dependencies and dev dependencies are installed (npm install {package}).

- Dependencies: express, mongoose, morgan.

- enter 'node seed/seeds.js' to run all seed data for the blogs.


## Usage

Download, install NPM packages, enter npm run dev / node server.js / nodemon server.js to activate server on Port 3000 and run the app.


## Contributing

To contribute further on this project please contacts the repo owners at the GitHub account below. 

## Tests

Further testing with jest package proposed for future development.

## Questions

For any further questions, please contact GitHub user:
[Thom Williams](https://www.github.com/ThomWilliams/)

Or for direct enquiries please email the follower developer address:
thomwilliams1990@gmail.com

## Screenshots

![Dashboard](/public/images/Dashboard-stats.png)

![Add Exercise](/public/images/Add-exercise.png)

![ Last Workout ](/public/images/Last-Workout.png)


## Deployment / Links

- Heroku: [Heroku](https://stunning-congaree-71957.herokuapp.com/)

- Project Repository: [GitHub](https://github.com/ThomWilliams/workout-tracker-tew)

- Issue tracker: [GitHub Issues](https://github.com/ThomWilliams/workout-tracker-tew/issues)

## License

MIT

Copyright (c) [2021] [Workout-Tracker]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
