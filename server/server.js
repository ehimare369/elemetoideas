// Import dependencies
import express from "express";

// Import Routers
import apiRouter from "./api-routes/routes.js";

// Declare server port
const PORT = 3000 || process.env.PORT;

// Initialize express app
const app = express();

// Set directory for view engine
app.set("views", "./client/views");
// Set template view engine
app.set("view engine", "ejs");

// Set the public directory
import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);
// Use public directory for static files like css, js, images etc
app.use(express.static(path.join(__dirname, "../client/public")));

// Require and use routes
app.use(apiRouter);

// Create server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
