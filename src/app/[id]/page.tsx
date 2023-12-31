import React from "react";

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import { User } from "@/app/types/User";
import { postDate } from "@/app/helpers/functions";
import { BackToMainBtn } from "../components";

import "@/app/page.scss";
import "./Post.scss";

interface PostDetailsPageProps {
  params: {
    id: string;
  };
}

const fetchUser = async (id: string): Promise<User | undefined> => {
  try {
    const response = await fetch(`${process.env.API_HOST}/users/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }

    const user = await response.json();

    return user as User;
  } catch (error) {
    console.error("Error has occurred:", error);
  }
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<any> {
  const { id } = params;
  const user = await fetchUser(id);

  if (!user) {
    return {
      title: "Post Not Found",
      description: "Sorry, post not found",
    };
  }

  return {
    title: user.title,
    description: user.description,
    openGraph: {
      title: user.title,
      description: user.description,
      images: [
        {
          url: user.image,
          alt: `Post ${user.title} image`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

const PostDetailsPage: React.FC<PostDetailsPageProps> = async ({ params }) => {
  const { id } = params;

  const user = await fetchUser(id);
  const metadata = await generateMetadata({ params });

  if (user?.userId !== +id) {
    return (
      <main className="main">
        <p className="post-error">Sorry, post not found</p>
        <Link className="back-link" href="/">
          Back to main page
        </Link>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
      </Head>
      <main className="main">
        <div className="post">
          <Image
            className="post__image"
            src={user?.image}
            alt="post image"
            width={1200}
            height={630}
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
        </div>
        <BackToMainBtn />
      </main>
    </>
  );
};

export default PostDetailsPage;
