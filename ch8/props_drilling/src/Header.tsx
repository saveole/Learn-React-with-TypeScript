import { User } from "./api/authenticate";

type Props = {
  user: undefined | User;
  onSignInClick: () => void;
  loading: boolean;
};

export function Header({ user, onSignInClick, loading }: Props) {
  return (
    <header>
      {user ? (
        <span className="ml-auto font-bold">{user.name} has signed in</span>
      ) : (
        <button
          onClick={onSignInClick}
          disabled={loading}
          className="whitespace-nowrap inline-flex items-center justify-center 
          ml-auto px-4 py-2 w-36 border border-transparent rounded-md shadow-sm 
          text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          {loading ? "..." : "Sign in"}
        </button>
      )}
    </header>
  );
}
