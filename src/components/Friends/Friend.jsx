import PropTypes from 'prop-types';
import css from './friends.module.css';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={css.status} style={{ backgroundColor: status(isOnline) }}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

const status = variant => {
  return variant ? '#e64529' : '#2bac32';
};

Friend.propType = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};