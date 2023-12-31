import { Content } from "./Content";
import { useAppContext } from "./AppContext";

export function Main() {
  const { user } = useAppContext();
  return (
    <main className="py-8">
      <h1 className="text-3xl text-center font-bold underline">Welcome</h1>
      <p className="m-8 text-xl text-center">
        {user ? `Hello ${user.name}!` : "PLease sign in"}
      </p>
      <Content />
    </main>
  );
}
