import { actions } from "@/app/reducers/postsReducer";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { User } from "@/app/types";

import "@/app/components/FavouriteButton/FavouriteButton.scss";

type Props = {
  user: User;
};

const FavouriteButton: React.FC<Props> = ({ user }) => {
  const { posts } = useAppSelector((state) => state.posts);

  const { userId } = user;

  const isProductFavorite = posts.some(
    (onePost: any) => onePost.userId === userId
  );

  const dispatch = useAppDispatch();

  return !isProductFavorite ? (
    <button
      className="favoutites__btn favoutites__btn-add"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        dispatch(actions.addFavourites(user));
      }}
    >
      Add to favourites
    </button>
  ) : (
    <button
      className="favoutites__btn favoutites__btn-delete"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        dispatch(actions.deleteFavourites(userId));
      }}
    >
      Delete from favourites
    </button>
  );
};
export default FavouriteButton;
