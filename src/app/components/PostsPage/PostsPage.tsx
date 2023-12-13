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

type Props = {
  users: User[];
};

const PostsPage: React.FC<Props> = ({ users }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>(Category.All);

  const visibleUsers = getFilteredUsers(users, query, category);

  return (
    <main className="main">
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
              <ReduxPersistor>
                <Card user={user} />
              </ReduxPersistor>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};
export default PostsPage;
