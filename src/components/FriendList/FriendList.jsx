import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <div>
      <h2>Friends list</h2>
      <ul className={s.friends__list}>
        <FriendListItem friends={friends} />
      </ul>
    </div>
  );
};

export default FriendList;
