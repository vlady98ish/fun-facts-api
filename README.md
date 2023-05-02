# Fun Facts API

 API which allows to perform fetch fan facts.

## Getting Started

### Installation

1. Clone this repository.
2. Go to the projects root directory.
3. Fill in the `.env` file with your details. 	
4. Open terminal.
5. Run `npm install`.
6. After installation is complete, you can start the REST server by running `npm start`.

## API Endpoint

### `GET /facts`

Retrieves all facts from the database.

### `POST /facts`

Creates a new fact in the database.

### `GET /facts/random`

Retrieves a random fact from the database.

### `GET /facts/categories`

Retrieves all categories of facts from the database.

### `GET /facts/search`

Retrieves all facts with a specific category.

**Query Parameters:**

- `category`: The category of facts to search for.

### `GET /facts/random/:category`

Retrieves a random fact from a specific category.

**Route Parameters:**

- `category`: The category of facts to retrieve.

## Controller

This endpoint is handled by the `FactController` in the `controllers` directory. The controller contains the following methods:

- `getFacts`: Retrieves all facts from the database.
- `createFact`: Creates a new fact in the database.
- `getRandomFact`: Retrieves a random fact from the database.
- `getCategories`: Retrieves all categories of facts from the database.
- `getRandomJokeByCategory`: Retrieves a random fact from a specific category.

## Technologies Used
* [node.js](https://nodejs.org/en) - Runtime engine
* [express](https://expressjs.com/) - Web Framework used
* [dotenv](https://github.com/motdotla/dotenv) - To read in `.env` files
* [mongoose](https://mongoosejs.com/) - As an ODM to interact with mongoDB

## Contributors

- Vladyslav Ishchenko <https://www.linkedin.com/in/vladyslav-ishchenko-104760236/>

## License

This endpoint is licensed under the MIT License. See `LICENSE` for more information.

