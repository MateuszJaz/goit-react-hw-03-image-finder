import style from './Searchbar.module.css';

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

export default Searchbar;
