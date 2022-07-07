import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ title, coverImg, summary, genres, id }) {
  return (
    <div>
      <li>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <img src={coverImg} alt={title} />
        <p>{summary}</p>
        <ul>
          {genres.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </li>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
