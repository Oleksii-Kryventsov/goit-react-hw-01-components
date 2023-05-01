import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics'
import data from './Statistics/data.json';
import { FriendList } from './Friends/FriendList';
import friends from './Friends/friends.json';
import { Transaction } from './Transactions/Transaction';
import transactions from './Transactions/transactions.json';
import css from './app.module.css'

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList
        friends={friends}
      />
      <Transaction 
        props={transactions}
      />
    </div>
  );
};






      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}