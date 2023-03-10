// Bring in modules.
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors");
const dbPort = require("config").get("backendPORT");

const app = express();

// Database connection.
connectDB();

// Express middleware.
app.use(express.json({ extended: false }));
app.use(cors());

// Define routes.
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// Serve static assets in production.
if (process.env.NODE_ENV === "production") {
  // Sets static folder.
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// Server port for the backend.
const PORT = process.env.PORT || dbPort;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
