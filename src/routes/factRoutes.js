const express = require('express')
const FactController = require("../controllers/FactController");
const router = express.Router();




router.get('/', FactController.getFacts)
router.post('/',FactController.createFact);
router.get("/random", FactController.getRandomFact);

router.get("/categories", FactController.getCategories);

router.get("/search", (req,res) => {
	const category = req.query.category;
	res.send(`Get facts with category ${category}`)
})



router.get("/random/:category", FactController.getRandomJokeByCategory)



module.exports = router;