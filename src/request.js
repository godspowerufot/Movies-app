const Request = {
  popular:
    "https://api.themoviedb.org/3/movie/popular?api_key=6482fbb45a9acbb824fcc7b6eadbb721&language=en-US&page=1 ",
  Upcoming:
    "https://api.themoviedb.org/3/movie/top_rated?api_key=6482fbb45a9acbb824fcc7b6eadbb721&languages=en-US&pages=3 ",
  Trending:
    "https://api.themoviedb.org/3/movie/upcoming?api_key=6482fbb45a9acbb824fcc7b6eadbb721&languages=en-US&pages=2",
  Horror:
    "https://api.themoviedb.org/3/search/movie?api_key=6482fbb45a9acbb824fcc7b6eadbb721&language=en-US&query=horror&page=1&include_adult=false",
};

export default Request;
