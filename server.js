import express from "express";

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
