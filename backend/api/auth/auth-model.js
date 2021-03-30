const db = require("postgres://sdxxproyywthnn:39944463d8f2eed1e053f19c2026cb66d643782a4667320264811fa5ea5d316d@ec2-54-235-108-217.compute-1.amazonaws.com:5432/d4g09v5f3sfgbl")

function find(){
	return db("users")
		.select("*")
}

function findBy(filter){
	return db("users")
		.select("*")
		.where(filter)
}

function findById(id){
	return db("users")
		.select("*")
		.where({ id })
		.first()
}

async function add(user){
	const [id] = await db("users").insert(user)
	return findById(id)
}

module.exports = {
	find,
	findBy,
	findById,
	add,
}