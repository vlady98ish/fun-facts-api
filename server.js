require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const port = process.env.PORT;



const DB_OPTIONS = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}

const factRouter = require('./src/routes/factRoutes');


app.use(express.json())
app.use('/facts', factRouter);
mongoose.connect(process.env.DB_URI, DB_OPTIONS,)
	.then(() => console.log('Connected Successfully'))
	.catch((err) => {console.log(err)});


app.listen(port, () => {
	console.log(`on port ${port}!`)
})









