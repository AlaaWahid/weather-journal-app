Weather-Journal App Project

Overview :
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

Instructions:
The user enter zip code and his feeling after that pressing generate button. He will get temperature for his city and date and his feeling.

Folder Structure :
Website
   -app.js
   -index.html
   -style.css
server.js
README.md
package-lock.json

Tecnologies:
HTML5,CSS,ES6 and Node JS

Description :

1- Setting up project environment that installed packages (express,cors,body-parser).
2- At server
   -Add GET route that send data to browser.
   -Add POST route that receive data and store it.
3- Acquired API Credentails from openweather.org
4- At client using Async function
   -fetch data from API.
   -post data to the server and return the response.
   -Updating the UI dynamically that fetch GET data '/personInfo' from server.

To run the Project:

1- Install Node.js
2- run command (node server.js) at terminal
3- Write at browser localhost:3600
