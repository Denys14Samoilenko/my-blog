import Link from "next/link";
import { useAppSelector } from "@/app/store/hooks";
import { BackToMainBtn, Card } from "@/app/components";

const FavouritePage = () => {
  const { posts } = useAppSelector((state) => state.posts);

  return (
    <div className="main">
      <BackToMainBtn />
      {!!posts.length ? (
        <div className="main">
          <div className="row">
            {posts.map((user) => (
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
        </div>
      ) : (
        <h1>Not found added posts</h1>
      )}
    </div>
  );
};

export default FavouritePage;
