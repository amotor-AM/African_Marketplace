const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const cookieParser = require("cookie-parser")

const authRouter = require("./auth/auth-router")
const marketRouter = require("./market/market-router")

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(cookieParser())

server.use('/api/auth', authRouter)
server.use('api/market', marketRouter)

server.use((err, req, res, next) => {
	res.status(500).json({
		message: err.message,
		stack: err.stack
	})
})

module.exports = server