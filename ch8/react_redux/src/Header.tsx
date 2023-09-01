import { authenticate } from "./api/authenticate";
import { authorize } from "./api/authorize";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import {
  authenticateAction,
  authenticatedAction,
  authorizeAction,
  authorizedAction,
} from "./store/userSlice";

export function Header() {
  const user = useSelector((state: RootState) => state.user.user);
  const loading = useSelector((state: RootState) => state.user.loading);
  const dispatch = useDispatch();

  async function handleSignInCLick() {
    dispatch(authenticateAction());
    const authenticatedUser = await authenticate();
    dispatch(authenticatedAction(authenticatedUser));
    if (authenticatedUser !== undefined) {
      dispatch(authorizeAction());
      const authorizedPermissions = await authorize(authenticatedUser.id);
      dispatch(authorizedAction(authorizedPermissions));
    }
  }
  return (
    <header>
      {user ? (
        <span className="ml-auto font-bold">{user.name} has signed in</span>
      ) : (
        <button
          onClick={handleSignInCLick}
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
