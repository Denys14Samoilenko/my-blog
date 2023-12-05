import { usersFromServer } from "@/app/helpers/constants";

export async function GET(request: Request) {
  const user = usersFromServer.find(
    ({ userId }) => userId === +request.url.slice(-1)
  );
  const jsonData = JSON.stringify(user);

  return new Response(jsonData, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
