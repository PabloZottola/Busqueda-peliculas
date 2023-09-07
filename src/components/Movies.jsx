function ListOfMovies({ movies }) {
  return (
    <ul className="grid gap-7 pt-6">
      {movies.map((movie) => (
        <li className="flex flex-col items-center gap-2" key={movie.id}>
          <h3 className="font-semibold text-2xl">{movie.title}</h3>
          <span className="text-xl font-semibold">{movie.year}</span>
          <img
            className="rounded-md shadow-md shadow-stone-600"
            src={movie.poster}
            alt={movie.title}
          />
        </li>
      ))}
    </ul>
  );
}
function NoMoviesResults() {
  return <p>No se encontraron resultados.</p>;
}

export function Movies({ movies }) {
  const hasmovies = movies?.length > 0;
  return hasmovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}
