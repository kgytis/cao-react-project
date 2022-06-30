import express from "express";

// Controllers imports
import { allMovies, movieByID } from "../controllers/movies.js";

const apiMovieRouter = express.Router();

apiMovieRouter.get("/movies", allMovies);
apiMovieRouter.get("/movie/:id", movieByID);

export default apiMovieRouter;
