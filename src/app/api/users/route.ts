import { usersFromServer } from "@/app/helpers/constants";

export async function GET(request: Request) {
  const jsonData = JSON.stringify(usersFromServer);

  return new Response(jsonData, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
