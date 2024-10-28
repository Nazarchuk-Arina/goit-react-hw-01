import s from "./FriendListItem.module.css";
const FriendList = ({ friends }) => {
  return (
    <div>
      <h2>Friends list</h2>
      <ul className={s.friends__list}>
        {friends.map((friend) => (
          <li key={friend.id} className={s.friends__item}>
            <img
              className={s.friends__image}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={s.friends__name}>{friend.name}</p>
            {friend.isOnline === true ? (
              <p className={s.friends__online}>Online</p>
            ) : (
              <p className={s.friends__offline}>Offline</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
