import PostsPage from "./components/PostsPage";

export default async function Home() {
  try {
    const response = await fetch(`${process.env.API_HOST}/users`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Ошибка при загрузке данных: ${response.status}`);
    }

    const data = await response.json();

    return <PostsPage users={data} />;
  } catch (error) {
    console.error("Произошла ошибка:");
    return (
      <div>
        Произошла ошибка при загрузке данных. Пожалуйста, повторите попытку
        позже.
      </div>
    );
  }
}
