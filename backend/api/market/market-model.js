const db = require("../../database/db")

function find(){
	return db("product_info as pi")
		.join("products as p", "p.id", "pi.product_id")
		.join("sellers as s", "s.id", "pi.seller_id")
		.select("p.product_name", "pi.seller_price", "pi.qty", "pi.description", "s.seller_name", "s.location")
}

function findBy(filter){
	return db("product_info as pi")
		.join("products as p", "p.id", "pi.product_id")
		.join("sellers as s", "s.id", "pi.seller_id")
		.where(filter)
		.select("p.product_name", "pi.seller_price", "pi.qty", "pi.description", "s.seller_name", "s.location")
}

function findById(id){
	return db("product_info as pi")
		.join("products as p", "p.id", "pi.product_id")
		.join("sellers as s", "s.id", "pi.seller_id")
		.where({ id })
		.select("p.product_name", "pi.seller_price", "pi.qty", "pi.description", "s.seller_name", "s.location")
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