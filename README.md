# Travel blog
This is just a pretend travel blog webiste with articles of places I've been.

In this I show the use of Expressjs for running my server, Mongoose to do all the database manipulation
in MongoDB. 
I have also provide seeded data that will automatically generate data (saved locally) for the website in seeds.js.
And using Ejs templating to output javascript which will display all data received from the database to the web page.

## Setup
Simply "npm install" package.json and then run "node app" also make sure to have MongoDB install and "mongod" running.
The seeded data will be called in app.js to run and generate data in your local machine, after running once you can comment out 
"seedDb();" to stop it from be called all the time the server starts because it will delete any extra added content that hasn't been added into the seeds.js file itself.