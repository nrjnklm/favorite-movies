function MoviesList() {
  const movies = [
    {
      title: "Inception",
      genre: "Sci-Fi",
      reason: "I love its mind-bending plot and the way it blends action with philosophy."
    },
    {
      title: "The Dark Knight",
      genre: "Action/Drama",
      reason: "The Joker's performance is unforgettable, and the story is incredibly powerful."
    },
    {
      title: "Interstellar",
      genre: "Sci-Fi/Drama",
      reason: "The emotional depth and stunning visuals make it one of the best sci-fi films ever."
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      genre: "Animation/Action",
      reason: "The animation style is unique, and the story is fun and inspiring."
    }
  ];

  return (
    <section>
      <h2>Favorite Movies</h2>
      {movies.map((movie, idx) => (
        <div key={idx} className="movie-card">
          <h3>{movie.title}</h3>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p>{movie.reason}</p>
        </div>
      ))}
    </section>
  );
}

export default MoviesList;
