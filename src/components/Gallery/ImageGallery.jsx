import style from './gallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ children }) => {
  return <ul className={style.gallery}>{children}</ul>;
};

ImageGallery.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ImageGallery;
