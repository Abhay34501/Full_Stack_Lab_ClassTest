# Full Stack Web Development Test Solutions

Solutions to the Full Stack Web Development class test.

## Topics Covered

* Node.js Event Loop
* Node.js Modules and `module.exports`
* Express Middleware and Authentication
* REST API Development
* HTTP Status Codes and Error Handling
* React Hooks and Fetch API
* CORS Configuration

## Project Structure

* `node-basics/` — Node.js event loop and modules
* `express-api/` — Express REST API for books
* `react-client/` — React frontend

## Requirements

* Node.js and npm
* A web browser
* Postman (optional, for API testing)

## Run the Backend

```bash
cd express-api
npm install
npm start
```

The API runs at `http://localhost:5000`.

## Run the Frontend

Create a React application using Vite, place the React files in its `src` folder, and run:

```bash
npm install
npm run dev -- --port 3000
```

Open `http://localhost:3000`.

## API Endpoints

| Method | Endpoint         | Description                      |
| ------ | ---------------- | -------------------------------- |
| GET    | `/api/books`     | Get all books                    |
| GET    | `/api/books/:id` | Get a book by ID                 |
| POST   | `/api/books`     | Create a book (API key required) |
| DELETE | `/api/books/:id` | Delete a book                    |

## Notes

* Books are stored in memory and reset when the server restarts.
* The POST endpoint requires the `x-api-key: secret123` header for demonstration.
* CORS is configured for local development at `http://localhost:3000`.

## License

For educational use.
