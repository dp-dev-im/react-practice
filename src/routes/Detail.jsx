import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
  };
  console.log(movie);
  useEffect(() => {
    getMovie();
  }, []);
  // return <>{movie.map((movie) => movie.title)}</>;
  return (
    <>
      <h1>{movie.title}</h1>
      <h1>{movie.url}</h1>
    </>
  );
}
export default Detail;
