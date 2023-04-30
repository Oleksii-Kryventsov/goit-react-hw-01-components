import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics'
import data from './Statistics/data.json';
// import { Friends } from './Friends/Friends';
// import friends from './Friends/friends.json';
// import { Transactions } from './Transactions/Transactions';
// import transactions from './Transactions/transactions.json'

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data} />
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