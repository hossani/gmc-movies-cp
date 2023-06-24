import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MoviesList from "./components/MoviesList";
import FilterForm from "./components/FilterForm";
function App() {
  const [movies, setMovies] = useState([
    {
      posterURL:
        "https://imgr.cineserie.com/2021/04/les-evades-decouvrez-les-immenses-acteurs-qui-ont-refuse-de-jouer-les-heros-du-film.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1",
      title: "les evadés",
      description:
        "Le banquier Andy Dufresne est arrêté pour avoir tué sa femme et son amant. Après une dure adaptation, il tente d'améliorer les conditions de la prison et de redonner de l'espoir à ses compagnons.",
      rating: 9.3,
    },
    {
      posterURL:
        "https://img-4.linternaute.com/RKODZTRW1iJK1Y-qSY89DHQIQTQ=/820x546/smart/902148b144fb4b9e832f68d2e0b43cfb/ccmcms-linternaute/11411721.jpg",
      title: "le Parrain",
      description:
        "Le patriarche vieillissant d'une dynastie de la mafia New Yorkaise passe le flambeau de son empire clandestin à son fils réticent.",
      rating: 9.2,
    },
    {
      posterURL:
        "https://cdn.theatlantic.com/thumbor/hX0gnKVqMXPUorVGv2wiIIGfCKo=/21x12:1578x888/976x549/media/img/mt/2018/07/TDK/original.jpg",
      title: "The Dark Knight : Le Chevalier noir",
      description:
        "Lorsqu'une menace mieux connue sous le nom du Joker émerge de son passé mystérieux et déclenche le chaos sur la ville de Gotham, Batman doit faire face au plus grand des défis psychologique et physique afin de combattre l'injustice.",
      rating: 9.0,
    },
  ]);

  const filterMovies = (filters) => {
    setMovies(
      movies.filter(
        (movie) =>
          movie.title.includes(filters.name) && movie.rating > filters.rating
      )
    );
  };

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    rating: 0,
    posterURL: "",
  });

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="App container">
      <FilterForm onSubmit={filterMovies} />
      <MoviesList movies={movies} />

      <div className="row">
        <div className="col s12 center">
          <h1>Ajouter Movie</h1>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="row">
              <label htmlFor="movieTitle" className="form-label col-4">
                Movie Name
              </label>
              <div className="row col-8">
                <input
                  placeholder="title"
                  type="text"
                  name="movieTitle"
                  id="movieTitle"
                  className="form-control"
                  value={newMovie.title}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, title: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <label htmlFor="" className="form-label col-4">
                Movie Description
              </label>
              <div className="col-8">
                <textarea
                  placeholder="description"
                  type="text"
                  name="movieTitle"
                  className="form-control"
                  value={newMovie.name}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, description: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <label htmlFor="" className="form-label col-4">
                Rating:
              </label>
              <div className="col-8">
                <input
                  type="number"
                  name="rating"
                  id="rating"
                  className="form-control"
                  value={newMovie.rating}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, rating: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-8">
            <div className="row">
              <label htmlFor="imgURL" className="form-label col-4">
                Poster URL
              </label>
              <div className="col-8">
                <input
                  type="text"
                  id="imgURL"
                  className="form-control"
                  placeholder="poster url"
                  value={newMovie.imagURl}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, posterURL: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <button className="btn btn-success" onClick={handleAddMovie}>
              Ajouter Movie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
