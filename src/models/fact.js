const mongoose = require('mongoose');

const funFactSchema =  new mongoose.Schema({
	category: {
		type: String,
		required: true
	},
	fact: {
		type: String,
		required: true
	}
	
},{collection:'facts',
	versionKey: false
});

const FunFact = mongoose.model('Fact', funFactSchema, 'facts');

module.exports = FunFact;