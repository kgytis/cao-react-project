import axios from "axios";

const db = process.env.DBURI;

const allMovies = async (req, res) => {
  try {
    axios
      .get(`${db}/movies`)
      .then((response) => response.data)
      .then((data) => {
        res.send(data);
      });
  } catch (err) {
    res.send({ msg: err });
  }
};

const movieByID = async (req, res) => {
  const id = req.params.id;
  try {
    axios
      .get(`${db}/movies/${id}`)
      .then((response) => response.data)
      .then((data) => {
        res.send(data);
      });
  } catch (err) {
    res.send({ msg: err });
  }
};

export { allMovies, movieByID };
