

const getFacts = (Model) => async () =>{
		try {
			return await Model.find().exec();
		} catch (err) {
			console.error(err);
			return {err: err.message};
		}
}

const addFact = (Model) => async (factObj) => {
		let newFact = new Model(factObj);
		console.error(newFact);
		try{
			newFact = await newFact.save();
		} catch (err){
			console.error(err);
			return {err:err.message}
		}
		return newFact;
 }
 
 const getRandomFact = (Model) => async (category) => {
	 let query = {};
	 if (category) {
		 query.category = category;
	 }
	 try {
		 const result = await Model.aggregate([{$match: query},{ $sample: { size: 1 } }]);
		 return result[0];
	 } catch (err) {
		 console.error(err);
		 return { err: err.message };
	 }
 }
 
 const getCategories = (Model) => async () => {
	try{
		return await Model.distinct("category")
	} catch (err) {
		console.error(err);
		return {err: err.message};
	}
 }


module.exports = (FunFact) => {
	return {
		getFacts: getFacts(FunFact),
		addFact: addFact(FunFact),
		getRandomFact: getRandomFact(FunFact),
		getCategories: getCategories(FunFact)
	}
}