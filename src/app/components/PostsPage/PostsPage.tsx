"use client";
import Link from "next/link";
import { User } from "../../types/User";
import PostFilter from "../PostFilter";
import styles from "../../page.module.css";
import "../../utils/columns.scss";
import "../../utils/width.scss";
import Card from "../Card";
import { useState } from "react";
import { getFilteredUsers } from "@/app/helpers/functions";
import { Category } from "@/app/types/Category";

type Props = {
  users: User[];
};

const PostsPage: React.FC<Props> = ({ users }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>(Category.All);

  const visibleUsers = getFilteredUsers(users, query, category);

  return (
    <main className={styles.main}>
      <PostFilter
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={setCategory}
      />
      <div className="row">
        {visibleUsers.map((user) => (
          <div
            className="column width-1-1 width-1-2-md width-1-3-lg"
            key={user.userId}
          >
            <Link href={`/${user.userId}`}>
              <Card user={user} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};
export default PostsPage;
