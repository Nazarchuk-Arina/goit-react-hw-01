import Profile from "./Profile/Profile";
import FriendListItem from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import profileData from "./../assets/profile.json";
import friendsData from "./../assets/friends.json";
import transactions from "./../assets/transactions.json";
import "modern-normalize";
import "/main.css";

const App = () => {
  return (
    <div className="container">
      <Profile user={profileData} />
      <FriendListItem friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
