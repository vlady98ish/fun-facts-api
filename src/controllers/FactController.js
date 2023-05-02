

const Fact = require('../models/fact')
const FactService = require('../services/FactService')(Fact)

const getFacts = async (req, res) => {
	const result = await FactService.getFacts();
	
	if(result.err) {
		res.status(500).set('Content-Type', 'application/json').json(result);
	}
	res.status(200).set('Content-Type', ' application/json').json(result);
}

const addFact = async (req,res) => {
	const fact = req.body;
	const result = await FactService.addFact(fact);
	if(result.err){
		res.status(500).set('Content-Type', 'application/json').json(result);
	}
	res.status(200).set('Content-Type', 'application/json').json(result);
}

const getRandomJokeByCategory = async (req,res) => {
	const category = req.params.category;
	const result = await FactService.getRandomFact(category);
	if(result.err){
		res.status(500).set('Content-Type', 'application/json').json(result);
	}
	res.status(200).set('Content-Type', 'application/json').json(result);
}

const getRandomFact = async (req,res) => {
	const result = await FactService.getRandomFact('');
	if(result.err){
		res.status(500).set('Content-Type', 'application/json').json(result);
	}
	res.status(200).set('Content-Type', 'application/json').json(result);
	
}

const getCategories = async (req,res) => {
	const result = await FactService.getCategories();
	if(result.err){
		res.status(500).set('Content-Type', 'application/json').json(result);
	}
	res.status(200).set('Content-Type', 'application/json').json(result);
}



module.exports = {
	getFacts: getFacts,
	createFact: addFact,
	getRandomFact: getRandomFact,
	getCategories: getCategories,
	getRandomJokeByCategory: getRandomJokeByCategory
}