import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.container}>
            <div className={css.profile}>
                <img className={css.avatar} src={image} alt="User avatar" />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <ul className={css.stats}>
                <li className={css.item}>
                    <span className={css.itemName}>Followers</span>
                    <span className={css.itemValue}>{stats.followers}</span>
                </li>
                <li className={css.item}>
                    <span className={css.itemName}>Views</span>
                    <span className={css.itemValue}>{stats.views}</span>
                </li>
                <li className={css.item}>
                    <span className={css.itemName}>Likes</span>
                    <span className={css.itemValue}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;