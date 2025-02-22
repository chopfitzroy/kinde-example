import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>

      <Link to={"/kinde-auth/login"}>
        Login
      </Link>

      <Link to={"/kinde-auth/register"}>
        Register
      </Link>
    </div>
  );
}
