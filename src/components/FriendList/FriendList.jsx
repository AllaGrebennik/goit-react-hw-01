import { FriendListItem } from '../FriendListItem/FriendListItem'
export const FriendList = ({ friends }) => {
    return (
        <div>
            <ul>
                {friends.map((friend) => {
                    return <li key={friend.id}>
                        <FriendListItem data={friend} />
                    </li>
                })}
            </ul>
        </div>
    )
}
