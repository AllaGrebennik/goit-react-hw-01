import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ data: { avatar, name, isOnline } }) => {
    return (
        <>
            <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
            <p className={css.friendName}>{name}</p>
            <p className={clsx(
                css.friendIsOnline,
                isOnline ? css.friendIsOn : css.friendIsOff
            )}>
                {isOnline ? "Online" : "Offline"}</p>
        </>
    );
};

export default FriendListItem;