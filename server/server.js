import express from "express";
import cors from "cors";
import countries from "./routes/countries.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
import logger from "./middleware/logger.js";

//.env variables
const PORT = process.env.PORT;

const app = express();

//Cors policy
app.use(cors());

//Logger
app.use(logger);

//Body Parser
app.use(express.json());

//Routes
app.use("/api/countries", countries);

//Error handler
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
