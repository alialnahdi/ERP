// src/server.js
const express = require("express");
const routes = require("./routes");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the routes defined in the index.js file
app.use("/api", routes);

// Start the server and listen on port 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Successful connection at port ${PORT}`);
});
