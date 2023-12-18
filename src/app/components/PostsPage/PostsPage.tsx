"use client";

import { useState } from "react";

import Link from "next/link";
import { Card, PostFilter } from "@/app/components";
import { getFilteredUsers } from "@/app/helpers/functions";
import { Category, User } from "@/app/types";

import "@/app/page.scss";
import "@/app/utils/columns.scss";
import "@/app/utils/width.scss";
import ReduxPersistor from "../ReduxPersistor/ReduxPersistor";
import { useDebounce } from "@/app/store/hooks";

type Props = {
  users: User[];
};

const PostsPage: React.FC<Props> = ({ users }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>(Category.All);
  const debouncedSearch = useDebounce(query);

  const visibleUsers = getFilteredUsers(users, debouncedSearch, category);

  return (
    <main className="main">
      <PostFilter
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={setCategory}
      />
      {!!visibleUsers.length ? (
        <div className="row">
          {visibleUsers.map((user) => (
            <div
              className="column width-1-1 width-1-2-md width-1-3-lg"
              key={user.userId}
            >
              <Link href={`/${user.userId}`}>
                <ReduxPersistor>
                  <Card user={user} />
                </ReduxPersistor>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <h2>No post filtering was found for these parameters</h2>
      )}
    </main>
  );
};
export default PostsPage;
