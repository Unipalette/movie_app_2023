import PropTypes from "prop-types";

function Movie({ title, coverImg, summary, genres }) {
  return (
    <div>
      <li>
        <h2>{title}</h2>
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
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
