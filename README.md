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
