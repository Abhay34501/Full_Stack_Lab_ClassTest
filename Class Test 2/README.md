# Full Stack Web Development Test Solutions

Solutions to the Full Stack Web Development class test.

## Topics Covered

- Node.js Event Loop
- Node.js Modules
- Express Middleware and Routing
- REST API Development
- Error Handling
- React Fetch API and useEffect
- CORS Configuration

## Project Structure

- node-basics/ - Node.js programs
- express-api/ - Express REST API
- react-client/src/ - React frontend

## Requirements

- Node.js
- npm
- Web browser

## Run Backend

Open terminal inside express-api:

    npm install
    npm start

Backend URL: http://localhost:5000

## Run Frontend

Create a React project using Vite and place
App.jsx and BookList.jsx inside its src folder.

Then run:

    npm install
    npm run dev -- --port 3000

Frontend URL: http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/books | Get all books |
| GET | /api/books/:id | Get book by ID |
| POST | /api/books | Create book |
| DELETE | /api/books/:id | Delete book |

## Notes

- Books are stored in an in-memory array.
- POST requires the x-api-key header with value secret123.
- CORS is configured for localhost:3000.
- Data resets when the server restarts.

## License

For educational use.

For educational use.
