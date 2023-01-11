import style from './button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      LOAD MORE
    </button>
  );
};

export default Button;
