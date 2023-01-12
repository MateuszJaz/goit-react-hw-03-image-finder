import style from './Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => (
  <header className={style.searchbar}>
    <form className={style.form} onSubmit={onSubmit}>
      <button type="submit" className="button">
        <span className="button-label">Search</span>
      </button>

      <input
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
