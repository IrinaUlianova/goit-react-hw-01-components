import PropTypes from 'prop-types';
import s from './Profile.module.css';
import defaultImage from '../images/defaultImage.jpg';

const Profile = ({
  name = 'не известно',
  tag,
  location,
  avatar = defaultImage,
  followersAccount,
  viewsAccount,
  likesAccount,
}) => {
  return (
    <div className={s.profile}>
      <div className={s.box}>
        <div className={s.description}>
          <img src={avatar} alt="User avatar" className={s.avatar} />
          <p className={s.name}>{name}</p>
          <p className={s.tag}>{tag}</p>
          <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
          <li className={s.item}>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{followersAccount}</span>
          </li>
          <li className={s.item}>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{viewsAccount}</span>
          </li>
          <li className={s.item}>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{likesAccount}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followersAccount: PropTypes.number,
  viewsAccount: PropTypes.number,
  likesAccount: PropTypes.number,
};

export default Profile;
