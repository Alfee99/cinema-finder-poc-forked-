import { useState, useEffect } from "react";

export const TMDB_IMG_BASE = "https://image.tmdb.org/t/p/w500";

const MOCK_MOVIES = [
  {
    id: 1,
    title: "Dune: Part Two",
    poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    vote_average: 8.2,
    release_date: "2024-03-01",
  },
  {
    id: 2,
    title: "Kung Fu Panda 4",
    poster_path: "/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    vote_average: 6.8,
    release_date: "2024-03-08",
  },
  {
    id: 3,
    title: "Ghostbusters: Frozen Empire",
    poster_path: "/sg4xJaufDiQl7caFEskBtQXfD4x.jpg",
    vote_average: 7.1,
    release_date: "2024-03-22",
  },
  {
    id: 4,
    title: "Godzilla x Kong",
    poster_path: "/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
    vote_average: 7.5,
    release_date: "2024-03-29",
  },
  {
    id: 5,
    title: "Civil War",
    poster_path: "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
    vote_average: 7.4,
    release_date: "2024-04-12",
  },
  {
    id: 6,
    title: "The Fall Guy",
    poster_path: "/tSz1qsmSJon0rqjHBxXZmrotuse.jpg",
    vote_average: 7.3,
    release_date: "2024-05-03",
  },
  {
    id: 7,
    title: "Furiosa",
    poster_path: "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
    vote_average: 7.8,
    release_date: "2024-05-24",
  },
  {
    id: 8,
    title: "Inside Out 2",
    poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    vote_average: 7.9,
    release_date: "2024-06-14",
  },
];

const useTMDB = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a small loading delay for realism
    const timer = setTimeout(() => {
      setMovies(MOCK_MOVIES);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return { movies, loading, error: null };
};

export default useTMDB;
