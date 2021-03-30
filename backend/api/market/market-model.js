const db = require("postgres://sdxxproyywthnn:39944463d8f2eed1e053f19c2026cb66d643782a4667320264811fa5ea5d316d@ec2-54-235-108-217.compute-1.amazonaws.com:5432/d4g09v5f3sfgbl")

function find(){
	return db("product_info")
		.select("*")
}

function findBy(filter){
	return db("product_info")
		.select("*")
		.where(filter)
}

function findById(id){
	return db("product_info")
		.select("*")
		.where({ id })
		.first()
}

async function add(item){
	const [id] = await db("product_info").insert(item)
	return findById(id)
}

function update(id, changes){
	return db("product_info")
		.where({ id })
		.update(changes)
}

function remove(id){
	return db("product_info")
		.where({ id })
		.del()
}

module.exports = {
	find,
	findBy,
	findById,
	add,
	update,
	remove,
}