// Load environment variables from .env file
require("dotenv").config();

const cors = require("cors");

// Import the Express application from src/app.js
const app = require("./src/app");

app.use(cors({}));
// Get the port from the environment variables
const port = process.env.APP_PORT;

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

app.get("/keys", (req, res) => {
  res.status(200).json({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });
});
