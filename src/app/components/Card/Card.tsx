import Image from "next/image";

import { User } from "@/app/types/User";
import { postDate } from "@/app/helpers/functions";
import { FavouriteButton } from "@/app/components";

import "./Card.scss";

type Props = {
  user: User;
};

const Card: React.FC<Props> = ({ user }) => {
  const { userId, username, city, avatar, description, title, image, date } =
    user;

  return (
    <div className="card">
      <Image
        className="card__image"
        src={image}
        alt="Post image"
        width={323}
        height={243}
      />

      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description.slice(0, 200)}</p>
      </div>
      <div className="card__userinfo userinfo">
        <Image
          className="userinfo__avatar"
          src={avatar}
          alt="user avatar"
          width={70}
          height={70}
        />
        <div className="userinfo__body">
          <p className="userinfo__name">
            <i className="icon-user"></i>
            {username}
          </p>
          <p className="userinfo__city">
            <i className="icon-location2"></i>
            {city}
          </p>
          <p className="userinfo__date">
            <i className="icon-clock"></i>
            {postDate(date)}
          </p>
        </div>
      </div>
      <FavouriteButton user={user} />
    </div>
  );
};

export default Card;
