const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get("/" , authorization , async (req , res) => {
    try {

        //req.user has the payload 
        // if you dont understand do the  //  res.json(req.user);   // to get the user_id
        // we did SELECT user_name instead of the SELECT *  because we dont want to pass the password
        const user = await pool.query("SELECT user_name FROM users WHERE user_id = $1 " , [req.user]);

        res.json(user.rows[0]);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server error......");
    }
})

module.exports = router;