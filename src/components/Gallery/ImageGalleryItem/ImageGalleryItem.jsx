import { nanoid } from 'nanoid';
import style from '../gallery.module.css';
import PropTypes from 'prop-types';

const GalleryItem = ({ searchResults, onClick }) => {
  return searchResults.map(({ webformatURL, largeImageURL }) => {
    return (
      <li key={nanoid()} className={style.galleryItem} onClick={onClick}>
        <img
          className={style.galleryItemImage}
          src={webformatURL}
          alt="search result img"
          width="300"
          height="200"
          data-largeimageurl={largeImageURL}
        />
      </li>
    );
  });
};

GalleryItem.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

export default GalleryItem;
