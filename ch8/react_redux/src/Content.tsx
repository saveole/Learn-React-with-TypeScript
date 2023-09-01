import { useSelector } from "react-redux";
import { RootState } from "./store/store";

export function Content() {
  const permissions = useSelector((state: RootState) => state.user.permissions);
  if (permissions === undefined) {
    return null;
  }
  const style = "mt-4 text-l text-center";
  return permissions.includes("admin") ? (
    <p className={style}>Some inportant stuff that only an admin can do</p>
  ) : (
    <p className={style}>Insufficient permissions</p>
  );
}
