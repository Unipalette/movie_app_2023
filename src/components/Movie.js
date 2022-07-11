import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../Movie.module.css";
function Movie({ title, coverImg, summary, genres, id }) {
  return (
    <div className={styles.card}>
      <li>
        <h2 className={styles.card_title}>
          <Link className={styles.card_title_link} to={`/movie/${id}`}>
            {title}
          </Link>
        </h2>
        <img src={coverImg} alt={title} />
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
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
