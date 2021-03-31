const jwt = require("jsonwebtoken")

const restricted = async (req, res, next) => {
	try{
		const token = req.cookies.token
		if (!token){
			return res.status(401).json({
				message: "token required"
			})
		}

		jwt.verify(token, "keep it secret keep it safe", (err, decoded) => {
			if (err){
				return res.status(401).json({
					message: "token invalid"
				})
			}
			req.token = decoded
			next()
		})
	} catch(err) {
		next(err)
	}
}

module.exports = restricted