import Profile from './components/Profile';
import user from './data/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';

import FriendList from 'components/FriendList';
import friendsData from 'data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

const App = () => (
  <div>
    <Profile
      name={user[0].name}
      tag={user[0].tag}
      location={user[0].location}
      avatar={user[0].avatar}
      followersAccount={user[0].stats.followers}
      viewsAccount={user[0].stats.views}
      likesAccount={user[0].stats.likes}
    />

    <Statistics title="Upload stats" stats={statisticalData}></Statistics>
    <Statistics stats={statisticalData} />

    <FriendList friends={friendsData} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
