const router = require('express').Router();
const pool = require("../db.js");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validinfo = require("../middleware/validinfo");
const authorization = require("../middleware/authorization");

// registering 

router.post("/register" , validinfo ,  async (req , res) => {
	try {

		// 1. descruture the req.body (name , email , password)

		const {name , email , password} = req.body;

		// 2. check if the users exist ( if exist then throw error)

		const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email] );
		//res.json(user.rows);
		if(user.rows.length !== 0 ) {
			res.status(401).json("User already exists");
		}

		// 3. Bcrypt the user password

		const saltRounds = 10;
		const salt = await bcrypt.genSalt(saltRounds);
		const bcryptPassword = await bcrypt.hash(password , salt);

		// 4. enter the new user into our database 

		const newUser = await pool.query("INSERT INTO users (user_name , user_email , user_password) VALUES ($1 , $2 , $3) RETURNING *" ,
		 [name , email , bcryptPassword]);
		//res.json(newUser.rows[0]);

		// 5. generating our jwt token

		const token = jwtGenerator(newUser.rows[0].user_id);

		res.json({ token });

	} catch(err){
		console.error(err.message);
		res.status(500).send("Server error");
	}
})

// login route
	router.post("/" , validinfo , async (req , res) => {
		try {

			//1. destructure the req.body

			const {email , password} = req.body;

			//2. check if user exist (if not throw erroe)

			const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

			if (user.rows.length === 0 ) {
				return res.status(401).json("Password or email incorrect");
			}

			//3. check if incoming password is the same as the database password

			const validPassword = await bcrypt.compare(password , user.rows[0].user_password);

			//console.log(validPassword);
			if(!validPassword){
				return res.status(401).json("Password or email incorrect");
			}

			//4. give them the jwt token

			const token = jwtGenerator(user.rows[0].user_id);

			res.json({ token });
			
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server error...");			
		}
	})

	router.get("/is-verify" , authorization , async  (req , res) => {
		try {

			res.json(true);
			
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server error..");
		}
	})



module.exports = router;
