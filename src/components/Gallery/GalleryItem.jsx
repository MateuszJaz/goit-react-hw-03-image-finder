import { nanoid } from 'nanoid';
import style from './gallery.module.css';

const GalleryItem = ({ searchResults, onClick }) => {
  return searchResults.map(({ webformatURL, largeImageURL }) => {
    return (
      <li key={nanoid()} className={style.galleryItem} onClick={onClick}>
        <img
          className={style.img}
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

export default GalleryItem;
