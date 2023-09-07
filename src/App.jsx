import { useRef } from "react";
import { Movies } from "./components/movies";
import { useMovies } from "./hook/useMovies";

function App() {
  const { movies: mappedMovies } = useMovies();
  const inputRef = useRef();
  const handleSubmits = (event) => {
    event.preventDefault();
    const { query } = Object.fromEntries(new window.FormData(event.target));
    console.log(query);
  };

  return (
    <>
      <header>
        <h1 className="text-center p-5 text-3xl font-bold font-">
          Buscador de peliculas
        </h1>
        <form className="flex gap-2 justify-center" onSubmit={handleSubmits}>
          <input
            name="query"
            placeholder="The Matrix, Star Wars..."
            className="text-black font-medium p-2 rounded-md"
          />
          <button
            type="submit"
            className="font-semibold p-2 border-2 bg-slate-800 rounded-md"
          >
            Buscar
          </button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </>
  );
}

export default App;
