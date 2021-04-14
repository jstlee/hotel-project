var express=require("express");
var bodyParser=require('body-parser');
 
var conn = require('./config');
var app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use("images", express.static(__dirname + "/public/images"));
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Different paths in the server. The server will respond depending on the requested path.
app.get('/', function (req, res) {
   res.redirect('/index.html') 
})

app.get('*', function(req, res){
	res.redirect('/index.html')
})
 
app.get('/index.html', function(req, res){
	res.sendFile("index.html");
})

app.get('/login.html', function (req, res) {  
   res.sendFile( "login.html" );  
})  

app.get('/signup.html', function(req, res){
	res.sendFile("signup.html");
})


//This function will be called when a user tries to sign up. It will try to insert the user provided values into the database.
app.post('/signup', function(req, res){
	conn.query("INSERT INTO users(email, username, password) VALUES (?, ?, ?);", [req.body.email, req.body.username, req.body.password], function(error, results, fields){
		if(error){
			console.log(error);
			res.json({
				success: false
			});
		} else {
			res.json({
				success: true
			})
		}
	});

});


// This function will be called when a user tries to login. It will try to fetch the user details using the email that is entered and compare the remaining values to the ones present in the database.
app.post('/login', function(req, res){
	conn.query("SELECT * FROM users WHERE email=?", req.body.email, function(error, results, fields){
		var body = req.body;
		var success = null;
		var message = "";
		if(error){
			success = false;
			message = "Unknown error occured"
		} else {

			/*
			You will receive the output of the query in the variable results as an array.
			You also have the data from the form in the varible body. Make sure you console.log() to understand the format.
			TODO:
			1. Make sure the results array has length greater than 0.
			2. If the length is greater than 0, check for the username received in the request.
			3. If the username is correct, check for the password received in the request.
			4. If everything checks out, assign success as TRUE and message as "Success".
			5. If it fails the check at any point, assign success as FALSE and message as the reason it failed. 
				e.g: "Username does not match", "Email ID does not exist", etc.  
			*/
			// Uncomment the lines of code below to proceed.

			if(results.length > 0){
				if(req.body.username == results[0].username){
					if(req.body.password == results[0].password){
						status = true;		// Assign appropriate value to the variable status
						message = "success";
					} else {
						status = false;		// Assign appropriate value to the variable status
						message = "Password incorrect";	// REPLACE (X) with appropriate values from EMAIL, USERNAME, PASSWORD
					}
				} else {
					status = false;			// Assign appropriate value to the variable status
					message = "Username incorrect";		// REPLACE (X) with appropriate values from EMAIL, USERNAME, PASSWORD
				}
			} else {
				status = false;				// Assign appropriate value to the variable status
				message = "Email incorrect";			// REPLACE (X) with appropriate values from EMAIL, USERNAME, PASSWORD
			}
		}
	res.json({
				success: success,
				message: message
			});
	})

})


app.listen(3000);