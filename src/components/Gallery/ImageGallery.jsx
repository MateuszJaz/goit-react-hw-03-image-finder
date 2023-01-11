import style from './gallery.module.css';

const ImageGallery = ({ children }) => {
  return <ul className={style.gallery}>{children}</ul>;
};

export default ImageGallery;
