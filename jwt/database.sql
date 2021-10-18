CREATE DATABASE jwt;

--set extintion uuid look it up on the internet if you forgat (how to install extintion uuid sql)

CREATE TABLE users(

	user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	user_name VARCHAR(255) NOT NULL,
	user_email VARCHAR(255) NOT NULL , 
	user_password VARCHAR(255) NOT NULL,

);

--insert fase users

INSERT INTO users (user_name  , user_email , user_password) VALUES ('jabagh' , 'jabaghsaeedjabagh@gmail.com' , 'jabagh12345');