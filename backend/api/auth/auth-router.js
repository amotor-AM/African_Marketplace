const router = require("express").Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const Auth = require("./auth-model")

router.post("/register", async (req, res, next) => {
	try {

	} catch (err) {
		next(err)
	}
})

router.post("/login", async (req, res, next) => {
	try {
		
	} catch (err) {
		next(err)
	}
})

router.post("/logout", async (req, res, next) => {
	try {
		
	} catch (err) {
		next(err)
	}
})

module.exports = router