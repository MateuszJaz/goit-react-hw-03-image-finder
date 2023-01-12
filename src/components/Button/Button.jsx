import style from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick, state }) => {
  const { searchResults, totalHits, isLoading } = state;
  if (searchResults.length >= 12 && searchResults.length !== totalHits)
    return (
      <button className={style.button} onClick={onClick}>
        LOAD MORE
      </button>
    );
  else if (totalHits && !isLoading)
    return <p className="info">End of results</p>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

export default Button;
