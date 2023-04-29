import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    // <div key={id}>
    <div>
      <h2>
        <Link to={`/movie/${id}`}>
          {" "}
          <img src={coverImg} alt={title} />
          <br />
          {title}
        </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres?.map((g) => ( 
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
