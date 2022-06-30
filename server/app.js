import "dotenv/config";
import express from "express";
import cors from "cors";

// API Routes
import apiMovieRouter from "./routes/movies.js";

const app = express();
const port = process.env.PORT;

const corsOptions = {
  origin: `*`,
  optionSucessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes usage
app.use("/api", apiMovieRouter);

app.listen(port, () => {
  console.log(`Server is running on PORT http://localhost:${port}`);
});
