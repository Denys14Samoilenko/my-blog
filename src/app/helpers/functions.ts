import { Category } from "../types/Category";
import { User } from "../types/User";

export const postDate = (date: any) => {
  const currentDate = new Date();
  const dateOfPost = new Date(+currentDate - +date).getDay();
  if (dateOfPost === 0) {
    return "Posted today";
  }
  if (dateOfPost === 1) {
    return `Posted ${dateOfPost} day ago`;
  }
  if (dateOfPost > 1) {
    return `Posted ${dateOfPost} days ago`;
  }
};

export const getFilteredUsers = (
  users: User[],
  query: string,
  sortType: Category
) => {
  users = users.filter((type) => {
    switch (sortType) {
      case Category.Cats:
        return type.category === Category.Cats;
      case Category.Buildings:
        return type.category === Category.Buildings;
      case Category.Rest:
        return type.category === Category.Rest;
      case Category.All:
      default:
        return type.category;
    }
  });

  if (query) {
    const preparedQuery = query.toLocaleLowerCase().trim();
    users = users.filter(({ title }) => title.includes(preparedQuery));
  }

  return users;
};
