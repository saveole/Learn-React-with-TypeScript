type Props = {
  permissions: undefined | string[];
};

export function Content({ permissions }: Props) {
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
