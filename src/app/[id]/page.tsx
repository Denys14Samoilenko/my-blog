import Link from "next/link";
import { postDate } from "../helpers/functions";
import styles from "../page.module.css";
import "./Post.scss";
import Image from "next/image";

interface PostDetailsPageProps {
  params: {
    id: string;
  };
}

const PostDetailsPage: React.FC<PostDetailsPageProps> = async ({ params }) => {
  const { id } = params;
  let user;

  try {
    const response = await fetch(`${process.env.API_HOST}/users`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    user = data.find(({ userId }: any) => userId === +id);

    if (!user) {
      return (
        <main className={styles.main}>
          <p className="post-error">Sorry, post not found</p>
          <Link className="back-link" href="/">
            Back to main page
          </Link>
        </main>
      );
    }
  } catch (error) {
    console.error("Произошла ошибка:");
  }

  return (
    <>
      <main className={styles.main}>
        <div className="post">
          <Image
            className="post__image"
            src={user?.image}
            alt="post image"
            width={500}
            height={500}
          />
          <div className="post__content">
            <div className="post__body">
              <h2 className="post__title">{user?.title}</h2>
              <p className="post__description">{user?.description}</p>
            </div>
            <div className="post__userinfo userinfo">
              <Image
                className="userinfo__avatar"
                src={user?.avatar}
                alt="user avatar"
                width={70}
                height={70}
              />
              <div className="userinfo__body">
                <p className="userinfo__name">
                  <i className="icon-user"></i>
                  {user?.username}
                </p>
                <p className="userinfo__city">
                  <i className="icon-location2"></i>
                  {user?.city}
                </p>
                <p className="userinfo__date">
                  <i className="icon-clock"></i>
                  {postDate(user?.date)}
                </p>
              </div>
            </div>
            <div className="post__tags tags">
              {user?.tags?.map((tag: string) => {
                return tag ? (
                  <h3 className="tags__title" key={tag}>
                    {tag}
                  </h3>
                ) : (
                  <p key={tag}>No tags at the post</p>
                );
              })}
            </div>
          </div>
          <Link className="back-link" href="/">
            Back to main page
          </Link>
        </div>
      </main>
    </>
  );
};

export default PostDetailsPage;
