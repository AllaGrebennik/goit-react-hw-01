import FriendListItem from '../FriendListItem/FriendListItem';
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
    return (
        <div className={css.container}>
            <ul className={css.friendList}>
                {friends.map((friend) => {
                    return <li className={css.friendListItem} key={friend.id}>
                        <FriendListItem data={friend} />
                    </li>
                })}
            </ul>
        </div>
    );
};

export default FriendList;
