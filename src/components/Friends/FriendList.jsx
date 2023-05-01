import PropTypes from 'prop-types';
import { Friend } from './Friend';
import css from './friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend avatar={avatar} name={name} isOnline={isOnline} key={id}/>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

