let http = require("http");

let server = http.createServer((req, res) => {
	console.log("Current URL:", req.url);
	// simple node js routing
	if (req.url === "/") { // http://localhost:8080
		// in node js
		res.end("Hello, I am from node server!");
		/**
		 * in expressjs
		 * res.send("Hello");
		 */
	}
	if (req.url === "/about") { // http://localhost:8080/about
        let aboutData = {
            gender: 'male',
            name: 'Vijay',
            location: 'Mumbai',
            desc: "Hi, This is about me page!"
        }
		res.end(JSON.stringify(aboutData));
	}
	if (req.url === "/course") { // http://localhost:8080/course
		res.end("This is my product course page!");
	}
});

server.listen(8080); // http://localhost:8080
