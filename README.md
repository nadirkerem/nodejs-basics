# Node.js Basics

## Overview

This lab provides a practical exercise in setting up a basic HTTP server using Node.js. It is designed to demonstrate handling different routes and serving both HTML and JSON content based on the request URL.

## Features

- **Basic Routing**: Handles routes for the home page, an about page, a personalized hello page, and a data page serving JSON.
- **Dynamic Content**: Responds with HTML content or JSON data depending on the route accessed.
- **Error Handling**: Includes a 404 Not Found response for undefined routes.

## Technology

- **Node.js**: Utilizes the `http` module for server operations and the `url` module for parsing request URLs.

## Installation

To run this server locally:

1. Ensure you have Node.js installed.
2. Clone the repository and navigate to the project directory.
3. Start the server:
   ```bash
   npm start
   ```

## Usage

- Access the server at http://127.0.0.1:3000/.
- Navigate to /, /about, /hello, or /data to see different responses.
- Use /hello?name=YourName to see a personalized greeting.
