import { PostsPage } from "@/app/components";

export default async function Home() {
  try {
    const response = await fetch(`${process.env.API_HOST}/users`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Error loading the data: ${response.status}`);
    }

    const data = await response.json();

    return <PostsPage users={data} />;
  } catch (error) {
    console.error("Error has occurred:");
    return (
      <div>There was an error loading the data. Please try again. later.</div>
    );
  }
}
