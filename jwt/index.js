const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;


// middleware
app.use(express.json()) // to gain access to req.body
app.use(cors());

// the two ways to go to the build folder
// 1. app.use(express.static(path.join(__dirname , "client/build")))
// 2. app.use(express.static( "client/build"))


if(process.env.NODE_ENV === "production"){
	// Server static content
	// npm run build
	app.use(express.static(path.join(__dirname , "client/build")))
}

//ROUTES//

//regiter and login route
app.use("/auth" , require("./routes/jwtAuth"));

//dashboard route

app.use("/dashboard" , require("./routes/dashboard"));

//if someone trys to fo to anthor root like localhost:5000/goop .... it will direct them back to the html page

app.get("*" , (req , res) => {
	res.sendFile(path.join(__dirname , "client/bulid/index.html"));
})

app.listen(PORT , () => {
	console.log(`app is running on port ${PORT}`)
})