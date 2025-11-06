# 📘 nodejs-hw

**nodejs-hw** is a learning project built with Node.js and Express.
The goal is to understand how a minimal web server works: how it receives HTTP requests, sends responses, uses middleware, and handles errors.

The application demonstrates:

- a clean backend structure with a dedicated `src` folder;
- environment variables via `.env` (server port);
- middleware setup with `cors` and `express.json()` for JSON request handling;
- HTTP request logging using `pino-http`;
- middleware for handling non-existent routes (404) and global errors (500);
- basic routes for working with notes.

---

## 📡 Routes and Example Responses

### Get all notes

**GET** `/notes`

```json
{
  "message": "Retrieved all notes"
}
```

---

### Get a note by ID

**GET** `/notes/123`

```json
{
  "message": "Retrieved note with ID: 123"
}
```

---

### Simulate a server error

**GET** `/test-error`

```json
{
  "message": "Simulated server error"
}
```

---

### Unknown route

**GET** `/profile`

```json
{
  "message": "Route not found"
}
```

---

This project can be run locally or deployed to [Render.com](https://render.com) for testing in a browser or with tools like Postman.
