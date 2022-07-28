# URL-Shortener
A URL shortener service built using NodeJs and MongoDB as the database.
## Technologies Used
* NodeJS for the backend
* HTML, CSS, EJS for the front end
* MongoDB database for storing URLs.
## Working
* User pastes in an arbitrarily long URL to shorten.
* Long URL is sent to the server which stores the long URL into a database along with a short unique id to identify the URL.
* When the user navigates to the shortened URL, we extract the unique id from the URL and find in the database which original long URL is associated with that id.
* Finally, we redirect the user to the original URL from the database
